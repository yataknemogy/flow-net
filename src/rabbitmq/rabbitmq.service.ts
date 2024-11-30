import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class RabbitMQService {
  constructor(@Inject("MESSAGE_BROKER") private readonly client: ClientProxy) {}

  async sendMessage(pattern: string, data: any): Promise<void> {
    try {
      this.client.emit(pattern, data).subscribe({
        next: () => console.log(`Message sent: ${pattern}`),
        error: (err) => console.error(`Error sending message: ${err.message}`),
      });
    } catch (error) {
      console.error(`Error sending message: ${error.message}`);
      throw error;
    }
  }

  async requestResponse<T>(pattern: string, data: any): Promise<T> {
    try {
      return await this.client.send<T>(pattern, data).toPromise();
    } catch (error) {
      console.error(`Error in request/response: ${error.message}`);
      throw error;
    }
  }
}
