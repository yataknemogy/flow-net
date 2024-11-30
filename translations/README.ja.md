
# Flow-Net プロジェクト

## 概要
Flow-Net は NestJS を使用して構築されたバックエンドプロジェクトで、モジュール式でスケーラブルなアーキテクチャを提供します。このプロジェクトは、メッセージングのための RabbitMQ、キャッシュのための Redis、キュー処理のための Bull、およびデータストレージのための MongoDB など、複数のサービスを統合しています。

## 機能
- ファイル管理：アップロード、キャッシュ、およびステータストラッキング。
- JWT を使用したユーザー認証および登録。
- ファイル処理イベントのための RabbitMQ との統合。
- 背景処理のための Bull キュー。
- データ取得の最適化のための Redis キャッシング。

## クイックスタート

### インストール
1. リポジトリをクローンします:
   ```bash
   git clone https://github.com/yataknemogy/flow-net.git
   cd flow-net
   ```
2. 依存関係をインストールします:
   ```bash
   npm install
   ```

3. 必要な変数を含む `.env` ファイルをルートディレクトリに作成します（[docs/env-variables.md](../docs/env-variables.md) を参照）。

4. アプリケーションを起動します:
   ```bash
   npm run start
   ```

### フォルダ構造
```plaintext
src/
├── config/         # 設定ファイル（例: Multer、環境変数）
├── db/             # データベーススキーマとモデル
├── file/           # ファイルアップロードと管理モジュール
├── queue/          # Bull キュープロセッサとサービス
├── rabbitmq/       # RabbitMQ コントローラーとサービス
├── redis/          # Redis 統合
├── user/           # ユーザー認証と管理
```

### ドキュメント
- [インストールガイド](../docs/installation.md)
- [モジュールの概要](../docs/modules.md)
- [API エンドポイント](../docs/api-endpoints.md)
- [環境変数](../docs/env-variables.md)
- [プロジェクトアーキテクチャ](../docs/architecture.md)

## 翻訳
この README ファイルは複数の言語で利用可能です:
- [English (オリジナル)](../README.md)
- [Русский (ロシア語)](README.ru.md)
- [Deutsch (ドイツ語)](README.de.md)
- [日本語 (日本語)](README.ja.md)
- [中文 (中国語)](README.zh.md)
- [한국어 (韓国語)](README.ko.md)
- [Français (フランス語)](README.fr.md)
    