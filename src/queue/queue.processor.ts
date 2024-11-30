import {
  Processor,
  Process,
  OnQueueActive,
  OnQueueCompleted,
  OnQueueFailed,
} from "@nestjs/bull";
import { Job } from "bull";
import * as fs from "fs";
import * as path from "path";
import axios from "axios";

@Processor("file-queue")
export class QueueProcessor {
  private readonly downloadFolder = path.join(
    __dirname,
    "..",
    "..",
    "downloads",
  );

  constructor() {
    if (!fs.existsSync(this.downloadFolder)) {
      fs.mkdirSync(this.downloadFolder, { recursive: true });
    }
  }

  @Process("process-file")
  async handleFileProcessing(
    job: Job<{ fileUrl: string; fileId: string }>,
  ): Promise<void> {
    const { fileUrl, fileId } = job.data;

    console.log(`Starting file processing: ${fileId} from ${fileUrl}`);

    try {
      const filePath = await this.downloadFile(fileUrl, fileId);
      console.log(`File downloaded and saved to ${filePath}`);
    } catch (error) {
      console.error(`Error processing file ${fileId}: ${error.message}`);
      throw error;
    }
  }

  private async downloadFile(fileUrl: string, fileId: string): Promise<string> {
    const filePath = path.join(this.downloadFolder, `${fileId}`);

    const writer = fs.createWriteStream(filePath);
    const response = await axios({
      url: fileUrl,
      method: "GET",
      responseType: "stream",
    });

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on("finish", () => resolve(filePath));
      writer.on("error", (error) => reject(error));
    });
  }

  @OnQueueActive()
  onActive(job: Job) {
    console.log(`Task active: ${job.id}`);
  }

  @OnQueueCompleted()
  onComplete(job: Job) {
    console.log(`Task completed: ${job.id}`);
  }

  @OnQueueFailed()
  onFailed(job: Job, error: any) {
    console.error(`Task failed: ${job.id}, error: ${error.message}`);
  }
}
