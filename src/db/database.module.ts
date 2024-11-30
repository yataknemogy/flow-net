import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { FileSchema } from "./file.schema";
import { UserSchema } from "./user.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "File", schema: FileSchema },
      { name: "User", schema: UserSchema },
    ]),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
