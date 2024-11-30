import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "The application is running and ready to work!";
  }

  getStatus(): { status: string; uptime: number; timestamp: Date } {
    return {
      status: "ok",
      uptime: process.uptime(),
      timestamp: new Date(),
    };
  }
}
