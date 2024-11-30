
# Project Architecture

## Overview
The project uses NestJS for building a modular and scalable backend. Key components include:
- **MongoDB** for database storage.
- **Redis** for caching.
- **RabbitMQ** for messaging.
- **Bull** for task queues.

## Flow
1. Users upload files via the File module.
2. File details are cached in Redis and stored in MongoDB.
3. A RabbitMQ event is triggered for further processing.
4. Background tasks are handled by the Queue module using Bull.
