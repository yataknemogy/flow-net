import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDocument } from "../db/user.schema";
import * as bcrypt from "bcrypt";
import { RedisService } from "../redis/redis.service";

@Injectable()
export class UserService {
  constructor(
    @InjectModel("User") private readonly userModel: Model<UserDocument>,
    private readonly redisService: RedisService,
  ) {}

  async registerUser(username: string, password: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await this.userModel.findOne({ username });
    if (existingUser) {
      throw new BadRequestException("A user with this username already exists");
    }

    const newUser = new this.userModel({
      username,
      password: hashedPassword,
    });
    await newUser.save();
    await this.redisService.setCache(`user:${username}`, newUser);

    return `User ${username} successfully registered`;
  }

  async validateUser(
    username: string,
    password: string,
  ): Promise<UserDocument | null> {
    let user = await this.redisService.getCache<UserDocument>(
      `user:${username}`,
    );

    if (!user) {
      user = await this.userModel.findOne({ username });
      if (!user) {
        return null;
      }

      // Кэшируем данные пользователя
      await this.redisService.setCache(`user:${username}`, user, 300);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return null;
    }

    return user;
  }
}
