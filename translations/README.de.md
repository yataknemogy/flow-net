
# Flow-Net Projekt

## Übersicht
Flow-Net ist ein Backend-Projekt, das mit NestJS entwickelt wurde und eine modulare und skalierbare Architektur bietet. Das Projekt integriert mehrere Dienste wie RabbitMQ für Messaging, Redis für Caching, Bull für Warteschlangen und MongoDB für die Datenspeicherung.

## Funktionen
- Dateiverwaltung: Hochladen, Zwischenspeichern und Statusverfolgung.
- Benutzer-Authentifizierung und Registrierung mit JWT.
- Integration mit RabbitMQ für Datei-Verarbeitungsereignisse.
- Aufgaben-Warteschlangen mit Bull für Hintergrundprozesse.
- Redis-Caching zur Optimierung der Datenabrufe.

## Schnellstart

### Installation
1. Klonen Sie das Repository:
   ```bash
   git clone https://github.com/yataknemogy/flow-net.git
   cd flow-net
   ```
2. Abhängigkeiten installieren:
   ```bash
   npm install
   ```

3. Erstellen Sie eine `.env`-Datei im Stammverzeichnis mit den erforderlichen Variablen (siehe [docs/env-variables.md](../docs/env-variables.md)).

4. Starten Sie die Anwendung:
   ```bash
   npm run start
   ```

### Ordnerstruktur
```plaintext
src/
├── config/         # Konfigurationsdateien (z. B. Multer, Umgebungsvariablen)
├── db/             # Datenbankschemata und -modelle
├── file/           # Module für Upload und Dateiverwaltung
├── queue/          # Bull-Warteschlangenprozessor und Dienste
├── rabbitmq/       # RabbitMQ-Controller und -Dienste
├── redis/          # Redis-Integration
├── user/           # Benutzerverwaltung und Authentifizierung
```

### Dokumentation
- [Installationsanleitung](../docs/installation.md)
- [Module Übersicht](../docs/modules.md)
- [API-Endpunkte](../docs/api-endpoints.md)
- [Umgebungsvariablen](../docs/env-variables.md)
- [Projektarchitektur](../docs/architecture.md)

## Übersetzungen
Diese README-Datei ist in folgenden Sprachen verfügbar:
- [English (Original)](../README.md)
- [Русский (Russisch)](README.ru.md)
- [Deutsch (Deutsch)](README.de.md)
- [日本語 (Japanisch)](README.ja.md)
- [中文 (Chinesisch)](README.zh.md)
- [한국어 (Koreanisch)](README.ko.md)
- [Français (Französisch)](README.fr.md)
    