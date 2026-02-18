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

Ça veut dire :

Vite surveille tes fichiers src/

Dès qu’un fichier change

Il recompilE UNIQUEMENT ce fichier

Il envoie la mise à jour au navigateur

React remplace le module sans recharger toute la page

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

Il dit :

où sont les fichiers

quelles règles appliquer

quel standard JS générer

quels types inclure

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
...
# Prisma
...