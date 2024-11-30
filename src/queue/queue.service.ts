import { Injectable } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bull";
import { Queue } from "bull";

@Injectable()
export class QueueService {
  constructor(@InjectQueue("file-queue") private readonly fileQueue: Queue) {}

  async addFileProcessingTask(fileUrl: string, fileId: string): Promise<void> {
    await this.fileQueue.add("process-file", { fileUrl, fileId });
    console.log(
      `Task for processing file ${fileId} has been added to the queue.`,
    );
  }
}
