import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

interface FileDocument {
  fileId: string;
  userId: string;
  timestamp: Date;
  status: string;
}

@Controller()
export class RabbitMQController {
  constructor(
    @InjectModel("File") private readonly fileModel: Model<FileDocument>, // Модель MongoDB
  ) {}

  @EventPattern("file_uploaded")
  async handleFileUploaded(@Payload() data: any) {
    console.log("Event file_uploaded received:", data);

    try {
      const savedFile = await this.fileModel.create({
        fileId: data.fileId,
        userId: data.userId,
        timestamp: data.timestamp,
        status: "uploaded",
      });

      console.log("File successfully saved to the database:", savedFile);

      console.log(
        `Notifying user ${data.userId}: File ${data.fileId} successfully uploaded.`,
      );
    } catch (error) {
      console.error("Error processing file_uploaded event:", error);
    }
  }
}
