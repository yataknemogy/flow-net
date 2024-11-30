
# Flow-Net 프로젝트

## 개요
Flow-Net은 NestJS로 구축된 백엔드 프로젝트로, 모듈형 및 확장 가능한 아키텍처를 제공합니다. 이 프로젝트는 RabbitMQ(메시징), Redis(캐싱), Bull(작업 대기열), MongoDB(데이터 저장)와 같은 다양한 서비스를 통합합니다.

## 기능
- 파일 관리: 업로드, 캐싱 및 상태 추적.
- JWT를 사용한 사용자 인증 및 등록.
- 파일 처리 이벤트를 위한 RabbitMQ 통합.
- 백그라운드 처리를 위한 Bull 작업 대기열.
- 데이터 검색 최적화를 위한 Redis 캐싱.

## 빠른 시작

### 설치
1. 저장소를 클론합니다:
   ```bash
   git clone https://github.com/yataknemogy/flow-net.git
   cd flow-net
   ```
2. 종속성을 설치합니다:
   ```bash
   npm install
   ```

3. 필수 변수를 포함한 `.env` 파일을 루트 디렉토리에 생성합니다 ([docs/env-variables.md](../docs/env-variables.md) 참고).

4. 애플리케이션을 시작합니다:
   ```bash
   npm run start
   ```

### 폴더 구조
```plaintext
src/
├── config/         # 구성 파일 (예: Multer, 환경 변수)
├── db/             # 데이터베이스 스키마 및 모델
├── file/           # 파일 업로드 및 관리 모듈
├── queue/          # Bull 작업 대기열 프로세서 및 서비스
├── rabbitmq/       # RabbitMQ 컨트롤러 및 서비스
├── redis/          # Redis 통합
├── user/           # 사용자 인증 및 관리
```

### 문서
- [설치 가이드](../docs/installation.md)
- [모듈 개요](../docs/modules.md)
- [API 엔드포인트](../docs/api-endpoints.md)
- [환경 변수](../docs/env-variables.md)
- [프로젝트 아키텍처](../docs/architecture.md)

## 번역
이 README 파일은 여러 언어로 제공됩니다:
- [English (원본)](../README.md)
- [Русский (러시아어)](README.ru.md)
- [Deutsch (독일어)](README.de.md)
- [日本語 (일본어)](README.ja.md)
- [中文 (중국어)](README.zh.md)
- [한국어 (한국어)](README.ko.md)
- [Français (프랑스어)](README.fr.md)
    