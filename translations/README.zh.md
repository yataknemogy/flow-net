
# Flow-Net 项目

## 概述
Flow-Net 是一个基于 NestJS 构建的后端项目，提供模块化和可扩展的架构。该项目集成了多个服务，如 RabbitMQ（消息传递）、Redis（缓存）、Bull（任务队列）和 MongoDB（数据存储）。

## 功能
- 文件管理：上传、缓存和状态跟踪。
- 使用 JWT 的用户认证和注册。
- 集成 RabbitMQ 处理文件事件。
- 使用 Bull 的任务队列进行后台处理。
- 使用 Redis 缓存优化数据检索。

## 快速开始

### 安装
1. 克隆仓库：
   ```bash
   git clone https://github.com/yataknemogy/flow-net.git
   cd flow-net
   ```
2. 安装依赖：
   ```bash
   npm install
   ```

3. 在根目录创建 `.env` 文件并设置所需变量（参见 [docs/env-variables.md](../docs/env-variables.md)）。

4. 启动应用程序：
   ```bash
   npm run start
   ```

### 文件结构
```plaintext
src/
├── config/         # 配置文件（例如 Multer、环境变量）
├── db/             # 数据库模式和模型
├── file/           # 文件上传和管理模块
├── queue/          # Bull 队列处理器和服务
├── rabbitmq/       # RabbitMQ 控制器和服务
├── redis/          # Redis 集成
├── user/           # 用户认证和管理
```

### 文档
- [安装指南](../docs/installation.md)
- [模块概述](../docs/modules.md)
- [API 端点](../docs/api-endpoints.md)
- [环境变量](../docs/env-variables.md)
- [项目架构](../docs/architecture.md)

## 翻译
此 README 文件提供多种语言版本：
- [English (原文)](../README.md)
- [Русский (俄语)](README.ru.md)
- [Deutsch (德语)](README.de.md)
- [日本語 (日语)](README.ja.md)
- [中文 (中文)](README.zh.md)
- [한국어 (韩语)](README.ko.md)
- [Français (法语)](README.fr.md)
    