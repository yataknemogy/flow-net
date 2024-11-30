import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { FileDocument } from "../db/file.schema";
import { RabbitMQService } from "../rabbitmq/rabbitmq.service";
import { RedisService } from "../redis/redis.service";

export interface FileData {
  fileId: string;
  userId: string;
  size: number;
  duration: number;
}

@Injectable()
export class FileService {
  private readonly cacheTTL = 300;

  constructor(
    @InjectModel("File") private readonly fileModel: Model<FileDocument>,
    private readonly rabbitMQService: RabbitMQService,
    private readonly redisService: RedisService,
  ) {}

  async uploadFile(fileData: FileData): Promise<string> {
    try {
      const savedFile = await this.fileModel.create({
        fileId: fileData.fileId,
        userId: fileData.userId,
        size: fileData.size,
        duration: fileData.duration,
        timestamp: new Date(),
        status: "uploaded",
      });

      await this.rabbitMQService.sendMessage(
        "file_uploaded",
        savedFile.toObject() as FileDocument,
      );

      const updatedFile = await this.updateFileStatus(
        fileData.fileId,
        "processed",
      );

      await this.redisService.setCache(
        `file:${fileData.fileId}`,
        updatedFile,
        this.cacheTTL,
      );

      return `File with ID ${fileData.fileId} has been successfully uploaded and processed!`;
    } catch (error) {
      console.error("Error uploading file:", error.message);
      throw new InternalServerErrorException("Failed to upload file.");
    }
  }

  async getFileById(fileId: string): Promise<FileDocument> {
    try {
      const cacheKey = `file:${fileId}`;

      const cachedFile =
        await this.redisService.getCache<FileDocument>(cacheKey);
      if (cachedFile) {
        return cachedFile;
      }

      const file = await this.fileModel.findOne({ fileId }).exec();
      if (!file) {
        throw new NotFoundException(`File with ID ${fileId} not found.`);
      }

      await this.redisService.setCache(
        cacheKey,
        file.toObject(),
        this.cacheTTL,
      );

      return file.toObject();
    } catch (error) {
      console.error(`Error retrieving file ${fileId}:`, error.message);
      throw new InternalServerErrorException(
        `Failed to retrieve file with ID ${fileId}.`,
      );
    }
  }

  async updateFileStatus(
    fileId: string,
    status: string,
  ): Promise<FileDocument> {
    try {
      const updatedFile = await this.fileModel
        .findOneAndUpdate({ fileId }, { status }, { new: true })
        .exec();

      if (!updatedFile) {
        throw new NotFoundException(`File with ID ${fileId} not found.`);
      }

      await this.redisService.setCache(
        `file:${fileId}`,
        updatedFile.toObject(),
        this.cacheTTL,
      );

      return updatedFile.toObject();
    } catch (error) {
      console.error(`Error updating file status ${fileId}:`, error.message);
      throw new InternalServerErrorException(
        `Failed to update file status with ID ${fileId}.`,
      );
    }
  }
}
