import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Inject,
} from "@nestjs/common";
import { Redis } from "ioredis";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Cache } from "cache-manager";

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private publisher: Redis;
  private subscriber: Redis;

  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {
    this.publisher = new Redis();
    this.subscriber = new Redis();
  }

  async onModuleInit() {
    await this.subscriber.subscribe("notifications");
    this.subscriber.on("message", (channel, message) => {
      this.handleMessage(channel, message);
    });
  }

  async onModuleDestroy() {
    await this.publisher.quit();
    await this.subscriber.quit();
  }

  async publish(channel: string, message: string): Promise<void> {
    await this.publisher.publish(channel, message);
  }

  private handleMessage(channel: string, message: string): void {
    console.log(`Channel: ${channel}, Message: ${message}`);
  }

  async setCache<T>(key: string, value: T, ttl: number = 300): Promise<void> {
    await this.cacheManager.set(key, value, ttl);
  }

  async getCache<T>(key: string): Promise<T | null> {
    return this.cacheManager.get<T>(key);
  }

  async delCache(key: string): Promise<void> {
    await this.cacheManager.del(key);
  }
}
