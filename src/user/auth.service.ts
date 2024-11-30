import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserDocument } from "../db/user.schema";

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  generateToken(user: UserDocument): string {
    const payload = { username: user.username, userId: user._id };
    return this.jwtService.sign(payload);
  }
}
