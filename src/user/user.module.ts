import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "../db/user.schema";
import { UserService } from "./user.service";
import { AuthService } from "./auth.service";
import { UserController } from "./user.controller";
import { JwtModule } from "@nestjs/jwt";
import { RedisModule } from "../redis/redis.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "User", schema: UserSchema }]),
    JwtModule.register({
      secret: "supersecretkey",
      signOptions: { expiresIn: "24h" },
    }),
    RedisModule,
  ],
  controllers: [UserController],
  providers: [UserService, AuthService],
  exports: [UserService, AuthService, JwtModule],
})
export class UserModule {}
