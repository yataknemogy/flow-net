import { Module } from "@nestjs/common";
import { BullModule } from "@nestjs/bull";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { QueueProcessor } from "./queue.processor";
import { QueueService } from "./queue.service";
import { QueueController } from "./queue.controller";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BullModule.registerQueueAsync({
      name: "file-queue",
      useFactory: async (configService: ConfigService) => ({
        redis: {
          host: configService.get<string>("REDIS_HOST", "localhost"),
          port: configService.get<number>("REDIS_PORT", 6379),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [QueueController],
  providers: [QueueProcessor, QueueService],
  exports: [QueueService],
})
export class QueueModule {}
