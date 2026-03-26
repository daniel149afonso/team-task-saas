### Frontend:

- npm run dev	Mode développement (pour coder) utilise src/

- npm run build	Crée la version finale prête pour internet “Prépare mon site pour le mettre en ligne.” utilise dist/

Parce que :

Le navigateur ne comprend pas TypeScript mais seulement Html Css et JS simple

Le navigateur ne comprend pas les imports modernes comme ton environnement de dev

Le code n’est pas optimisé

Le dossier dist/ est :

plus petit

plus rapide

prêt pour production

| Dossier | Pour qui ?             |
| ------- | ---------------------- |
| `src/`  | Pour toi (développeur) |
| `dist/` | Pour les utilisateurs  |

## Vite:

1️⃣ En développement (npm run dev)

Vite agit comme :

👉 un serveur de développement

Il :

Lance un serveur local (ex: http://localhost:5173
)

Surveille tes fichiers

Compile à la volée

Fait du Hot Module Replacement (HMR)

Transforme TypeScript → JavaScript

Transforme JSX → JavaScript

Gère les imports modernes

Donc oui, il crée un environnement de développement.

Mais ce n’est qu’une partie de son rôle.

2️⃣ En production (npm run build)

Vite devient :

👉 un outil de bundling et d’optimisation

Il :

Analyse tous tes imports

Regroupe tout en fichiers optimisés

Minifie le code

Compresse le CSS

Génère le dossier dist/

Il prépare ton app pour être déployée ailleurs (Vercel, Netlify, serveur Node, etc).

🧩 Donc Vite c’est quoi exactement ?

C’est :

👉 un outil qui transforme ton code moderne en code que le navigateur comprend
👉 un serveur de dev rapide
👉 un optimiseur pour production

---

Vite est un outil de build pour le frontend.

Il a 2 rôles principaux :

Créer un environnement de développement rapide

Construire la version optimisée pour production

npm run dev:

Vite lance un serveur de développement avec HMR.

HMR = Hot Module Replacement

Ça veut dire Vite surveille tes fichiers src/
Dès qu’un fichier change, il recompile UNIQUEMENT ce fichier
Il envoie la mise à jour au navigateur. React remplace le module sans recharger toute la page

### JSON
C’est le cerveau de ton projet Node.

Il contient :

📦 Les dépendances
"dependencies": {
  "react": "...",
  "vite": "..."
}

Ça dit :

“Mon projet a besoin de React, Vite, etc.”

▶️ Les scripts
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build"
}

Ça dit :

Quand je tape npm run build, exécute cette commande

🧠 2️⃣ tsconfig.json — à quoi ça sert ?

C’est la configuration de TypeScript.

Il dit où sont les fichiers, quelles règles appliquer, quel standard JS générer, quels types inclure

Encore une fois :
👉 Il ne va PAS dans le navigateur.

Il sert uniquement pendant le développement et le build.

🧠 3️⃣ Les autres fichiers .json

Si tu crées un fichier :

data.json

Et que tu l’importes dans ton code :

import data from "./data.json"

Alors :

En dev → Vite le lit

En build → Vite l’intègre dans le bundle

En production → il devient du JavaScript normal

# Setup: Nest.JS + Prisma
```bash
# crée le backend
npm i -g @nestjs/cli
nest new backend

cd backend
npm i prisma @prisma/client
npx prisma init

```



# Nest.JS
Controller → Service → Database

1️⃣ Controller (front door): receive Http requests
Examples: POST /tasks or GET /tasks

2️⃣ Service (Brain): contains the logic
Examples: creates a task, calls Prisma, validates datas

3️⃣ Prisma (Hand): talks to the db

npm install -g @nestjs/cli: install NestJS
run the backend in dev mode: npm run start:dev

```bash
nest g module tasks
nest g service tasks
nest g controller tasks
```
tasks/
  tasks.module.ts
  tasks.service.ts
  tasks.controller.ts

# Prisma

- Goal: Prisma is a next-generation Object-Relational Mapper (ORM) specifically designed for Node.js and TypeScript. Its primary purpose is to simplify database interactions by allowing developers to work with data using objects in their code instead of writing raw SQL queries.

le fichier .prisma est une description pas la db, c'est un plan d'architecte ce n'est pas la maison.

- npx prisma init: Sets up a new Prisma project by creating a prisma/ directory, a schema.prisma file for your models, and a .env file for database credentials

- npx prisma generate: Reads your schema.prisma and generates the Prisma Client, a type-safe query builder used in your application code.

- npx prisma migrate dev: Used in development to create and apply SQL migrations to your database based on changes in your schema.

- npx prisma studio: Opens a GUI (Graphical User Interface) in your browser, allowing you to view and edit the data in your database without writing SQL.

- npx prisma db push: Synchronizes your Prisma schema with your database schema without using migrations, often used for prototyping or local development

npm install @prisma/client: create a PrismaService to communicate with Nest.js

# Docker

- Goal: Docker is a platform for "containerising" applications. Docker simplifies how you package and run your software so it works exactly the same on any machine.
The main goal of Docker is to solve the "it works on my machine" problem. It ensures that if an app runs on a developer's laptop, it will run identically in testing and production.

Docker = environnement isolé reproductible.

Dans ton projet SaaS tu as besoin de :

React (frontend)

NestJS (backend)

PostgreSQL (base de données)

Le problème :

👉 PostgreSQL doit être installé, configuré, versionné, démarré…
👉 Ça dépend de ton OS
👉 Ça casse souvent
👉 Sur une autre machine ça ne marche plus

🎯 Docker résout ça

Docker permet de dire :

"Je veux PostgreSQL version 16, avec ces identifiants, sur ce port, point."

- docker compose up -d: is used to start and run your entire application stack in the background

- docker compose ps: to see which services are currently running and their health.

- docker compose logs -f to follow the logs if you need to debug.

- docker compose stop: it pauses the docker processus

- docker compose down: Stops and removes the containers and networks created by up.

Le backend peut être redémarrer plusieurs fois mais la db doit être stable sinon on perd toutes les données à chaque fois. Docker isole la db