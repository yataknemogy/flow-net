import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { FileSchema } from "../db/file.schema";
import { FileController } from "./file.controller";
import { FileService } from "./file.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: "File", schema: FileSchema }])],
  controllers: [FileController],
  providers: [FileService],
  exports: [FileService],
})
export class FileModule {}
