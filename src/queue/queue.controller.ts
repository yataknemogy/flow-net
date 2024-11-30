import { Controller, Post, Body } from "@nestjs/common";
import { QueueService } from "./queue.service";

@Controller("queue")
export class QueueController {
  constructor(private readonly queueService: QueueService) {}

  @Post("add-task")
  async addTask(
    @Body("fileUrl") fileUrl: string,
    @Body("fileId") fileId: string,
  ): Promise<string> {
    await this.queueService.addFileProcessingTask(fileUrl, fileId);
    return `Task for processing file ${fileId} has been added to the queue.`;
  }
}
