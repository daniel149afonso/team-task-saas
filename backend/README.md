# Backend — Team Task Manager

Express REST API for Team Task Manager. Handles authentication, teams, and tasks. Secured with JWT. Connected to PostgreSQL via Prisma ORM.

## Stack

| Tool | Version | Role |
|------|---------|------|
| Node.js | ≥18 | Runtime |
| Express | 4 | HTTP framework |
| TypeScript | 5.7 | Static typing |
| Prisma | 5 | ORM & migrations |
| PostgreSQL | 16 | Database |
| bcryptjs | — | Password hashing |
| jsonwebtoken | — | JWT signing & verification |

## Installation

```bash
npm install
```

## Environment variables

Create a `.env` file at the root of `backend/`:

```env
DATABASE_URL="postgresql://<user>:<password>@localhost:5432/team_task_manager?schema=public"
JWT_SECRET="your-secret-key"
PORT=3000
```

## Database setup

Apply all migrations and generate the Prisma client:

```bash
npx prisma migrate dev
```

To inspect the database in a browser UI:

```bash
npx prisma studio
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload (ts-node-dev) on port `3000` |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm start` | Run the compiled production build |

## Structure

```
backend/
├── prisma/
│   ├── migrations/             ← Migration history (auto-generated)
│   └── schema.prisma           ← Database models: User, Team, Task
└── src/
    ├── index.ts                ← App entry: Express setup, CORS, route mounting
    ├── lib/
    │   └── prisma.ts           ← Prisma client singleton
    ├── middleware/
    │   └── authMiddleware.ts   ← Verifies JWT on protected routes
    └── routes/
        ├── auth.ts             ← POST /auth/register, POST /auth/login
        ├── tasks.ts            ← GET/POST/PATCH/DELETE /tasks
        └── teams.ts            ← GET/POST /teams
```

## API reference

All routes prefixed with `/tasks` and `/teams` require the header:
```
Authorization: Bearer <token>
```

### Auth

| Method | Endpoint | Body | Description |
|--------|----------|------|-------------|
| POST | `/auth/register` | `{ email, password }` | Create account, returns JWT |
| POST | `/auth/login` | `{ email, password }` | Log in, returns JWT |

### Teams

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/teams` | List all teams (includes their tasks) |
| POST | `/teams` | Create a team — body: `{ name }` |

### Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | List all tasks |
| GET | `/tasks?teamId=<id>` | List tasks filtered by team |
| POST | `/tasks` | Create a task — body: `{ title, teamId }` |
| PATCH | `/tasks/:id` | Update a task — body: `{ title?, description?, status? }` |
| DELETE | `/tasks/:id` | Delete a task |

### Task statuses

```
todo  →  doing  →  done
```

## Database schema

```
User
├── id         UUID (PK)
├── email      String (unique)
├── password   String (hashed)
└── createdAt  DateTime

Team
├── id         UUID (PK)
├── name       String
├── createdAt  DateTime
└── tasks      Task[]

Task
├── id          UUID (PK)
├── teamId      UUID (FK → Team)
├── title       String
├── description String?
├── status      todo | doing | done
├── createdAt   DateTime
└── updatedAt   DateTime
```
