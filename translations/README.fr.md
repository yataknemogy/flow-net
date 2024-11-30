
# Projet Flow-Net

## Aperçu
Flow-Net est un projet backend construit avec NestJS, offrant une architecture modulaire et évolutive. Le projet intègre plusieurs services tels que RabbitMQ pour la messagerie, Redis pour le cache, Bull pour les files d'attente et MongoDB pour le stockage des données.

## Fonctionnalités
- Gestion des fichiers : téléchargement, mise en cache et suivi de statut.
- Authentification et inscription des utilisateurs avec JWT.
- Intégration de RabbitMQ pour les événements de traitement des fichiers.
- Files d'attente avec Bull pour les traitements en arrière-plan.
- Mise en cache avec Redis pour une récupération de données optimisée.

## Démarrage rapide

### Installation
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/yataknemogy/flow-net.git
   cd flow-net
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Créez un fichier `.env` dans le répertoire racine avec les variables requises (voir [docs/env-variables.md](../docs/env-variables.md)).

4. Démarrez l'application :
   ```bash
   npm run start
   ```

### Structure des dossiers
```plaintext
src/
├── config/         # Fichiers de configuration (par exemple, Multer, variables d'environnement)
├── db/             # Schémas et modèles de base de données
├── file/           # Modules de gestion et de téléchargement de fichiers
├── queue/          # Processeur et services de file d'attente Bull
├── rabbitmq/       # Contrôleurs et services RabbitMQ
├── redis/          # Intégration Redis
├── user/           # Authentification et gestion des utilisateurs
```

### Documentation
- [Guide d'installation](../docs/installation.md)
- [Aperçu des modules](../docs/modules.md)
- [Points de terminaison API](../docs/api-endpoints.md)
- [Variables d'environnement](../docs/env-variables.md)
- [Architecture du projet](../docs/architecture.md)

## Traductions
Ce fichier README est disponible en plusieurs langues :
- [English (Original)](../README.md)
- [Русский (Russe)](README.ru.md)
- [Deutsch (Allemand)](README.de.md)
- [日本語 (Japonais)](README.ja.md)
- [中文 (Chinois)](README.zh.md)
- [한국어 (Coréen)](README.ko.md)
- [Français (Français)](README.fr.md)
    