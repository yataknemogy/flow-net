import {
  Controller,
  Post,
  Get,
  Param,
  UploadedFile,
  UseInterceptors,
  Body,
  NotFoundException,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { FileService, FileData } from "./file.service";
import { RedisService } from "../redis/redis.service";

@Controller("files")
export class FileController {
  constructor(
    private readonly fileService: FileService,
    private readonly redisService: RedisService,
  ) {}

  @Post("upload")
  @UseInterceptors(FileInterceptor("file"))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body("userId") userId: string,
  ) {
    const fileData: FileData = {
      fileId: file.filename,
      userId,
      size: file.size,
      duration: 0,
    };

    await this.fileService.uploadFile(fileData);
    await this.redisService.setCache(file.filename, fileData);

    return { message: `File ${file.filename} successfully uploaded.` };
  }

  @Get(":fileId")
  async getFileById(@Param("fileId") fileId: string) {
    const cachedFile = await this.redisService.getCache<FileData>(fileId);
    if (cachedFile) {
      return cachedFile;
    }

    const file = await this.fileService.getFileById(fileId);
    if (!file) {
      throw new NotFoundException("File not found.");
    }

    await this.redisService.setCache(fileId, file);
    return file;
  }
}
