
# Flow-Net Project

## Overview
Flow-Net is a backend project built with NestJS, providing modular and scalable architecture. The project integrates multiple services such as RabbitMQ for messaging, Redis for caching, Bull for queues, and MongoDB for data storage.

## Features
- File management with upload, caching, and status tracking.
- User authentication and registration with JWT.
- Integration with RabbitMQ for file processing events.
- Task queues using Bull for background processing.
- Redis caching for optimized data retrieval.

## Quick Start

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yataknemogy/flow-net.git
   cd flow-net
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the required variables (see [docs/env-variables.md](docs/env-variables.md)).

4. Start the application:
   ```bash
   npm run start
   ```

### Folder Structure
```plaintext
src/
├── config/         # Configuration files (e.g., Multer, environment variables)
├── db/             # Database schemas and models
├── file/           # File upload and management modules
├── queue/          # Bull queue processor and services
├── rabbitmq/       # RabbitMQ controllers and services
├── redis/          # Redis integration
├── user/           # User authentication and management
```

### Documentation
- [Installation Guide](docs/installation.md)
- [Modules Overview](docs/modules.md)
- [API Endpoints](docs/api-endpoints.md)
- [Environment Variables](docs/env-variables.md)
- [Project Architecture](docs/architecture.md)

## Translations
This README is available in multiple languages:
- [English (Original)](README.md)
- [Русский (Russian)](translations/README.ru.md)
- [Deutsch (German)](translations/README.de.md)
- [日本語 (Japanese)](translations/README.ja.md)
- [中文 (Chinese)](translations/README.zh.md)
- [한국어 (Korean)](translations/README.ko.md)
- [Français (French)](translations/README.fr.md)
