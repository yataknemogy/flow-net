import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { RabbitMQService } from "./rabbitmq.service";
import { RabbitMQController } from "./rabbitmq.controller";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { FileSchema } from "../db/file.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "File", schema: FileSchema }]),

    ClientsModule.register([
      {
        name: "MESSAGE_BROKER",
        transport: Transport.RMQ,
        options: {
          urls: ["amqp://localhost:5672"],
          queue: "files_queue",
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  providers: [RabbitMQService],
  controllers: [RabbitMQController],
  exports: [RabbitMQService],
})
export class RabbitMQModule {}
