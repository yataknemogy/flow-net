import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get("hello")
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("status")
  getStatus(): { status: string; uptime: number; timestamp: Date } {
    return this.appService.getStatus();
  }
}
