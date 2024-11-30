import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { ConfigModule } from "@nestjs/config";
import { MulterModule } from "@nestjs/platform-express";

import { RabbitMQController } from "./rabbitmq/rabbitmq.controller";
import { RabbitMQService } from "./rabbitmq/rabbitmq.service";
import { FileController } from "./file/file.controller";
import { FileService } from "./file/file.service";
import { UserModule } from "./user/user.module";
import { UserController } from "./user/user.controller";
import { UserService } from "./user/user.service";
import { AuthService } from "./user/auth.service";
import { FileSchema } from "./db/file.schema";
import { UserSchema } from "./db/user.schema";
import { multerConfig } from "./config/multer.config";
import { RedisModule } from "./redis/redis.module";
import { RedisService } from "./redis/redis.service";
import { RabbitMQModule } from "./rabbitmq/rabbitmq.module";
import { CacheModule } from "@nestjs/cache-manager";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017"),
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forFeature([
      { name: "File", schema: FileSchema },
      { name: "User", schema: UserSchema },
    ]),

    ClientsModule.register([
      {
        name: "MESSAGE_BROKER",
        transport: Transport.RMQ,
        options: {
          urls: ["amqp://localhost:5672"],
          queue: "messages_queue",
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),

    MulterModule.register(multerConfig),
    CacheModule.register(),

    RedisModule,
    RabbitMQModule,
    UserModule,
  ],
  controllers: [RabbitMQController, FileController, UserController],
  providers: [
    RabbitMQService,
    FileService,
    UserService,
    AuthService,
    RedisService,
  ],
})
export class AppModule {}
