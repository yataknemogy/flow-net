
# Installation Guide

## Prerequisites
- Node.js >= 16.x
- npm >= 7.x
- MongoDB
- Redis
- RabbitMQ

## Steps
1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure `.env` file with the required variables:
   ```plaintext
   MONGO_URI=mongodb://localhost:27017/flow-net
   REDIS_HOST=localhost
   REDIS_PORT=6379
   RABBITMQ_URL=amqp://localhost:5672
   JWT_SECRET=supersecretkey
   ```

3. Start the application:
   ```bash
   npm run start
   ```
