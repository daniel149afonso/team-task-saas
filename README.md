# Team Task Manager

## Description

Team Task Manager is a full-stack SaaS web application designed to help teams organize and track their work. The goal is to provide a simple, structured environment where users can create teams, assign tasks to those teams, and follow the progress of each task through three statuses: **To Do**, **In Progress**, and **Done**.

The application is split into two independent services:

- A **React** single-page application (frontend) that communicates with the API over HTTP.
- An **Express** REST API (backend) backed by a **PostgreSQL** database managed through **Prisma ORM**.

Users authenticate via JWT tokens. All task and team data is scoped behind authentication, so each session is private and secure.

## Features

- User registration and login with hashed passwords (bcrypt) and JWT tokens
- Create and list teams
- Create, update, and delete tasks linked to a team
- Filter tasks by team
- Task status tracking: `todo` → `doing` → `done`
- Protected routes — unauthenticated requests are redirected to login

## Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [PostgreSQL](https://www.postgresql.org/) running locally (default port `5432`)

### 1. Clone the repository

```bash
git clone <repository-url>
cd team-task-saas
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
DATABASE_URL="postgresql://<user>:<password>@localhost:5432/team_task_manager?schema=public"
JWT_SECRET="your-secret-key"
```

Apply the database migrations and generate the Prisma client:

```bash
npx prisma migrate dev
```

Start the backend development server (runs on port `3000`):

```bash
npm run dev
```

### 3. Set up the frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on port `5173` and opens automatically in the browser.

### Project structure

```
  ┌─────────────────────┐        HTTP/JSON        ┌────────────────────────┐
  │   FRONTEND (React)  │  ─────────────────────► │   BACKEND (Express)    │
  │   localhost:5173    │ ◄─────────────────────  │   localhost:3000       │
  └─────────────────────┘     JWT dans headers    └───────────┬────────────┘
                                                              │ Prisma ORM
                                                              ▼
                                                   ┌──────────────────────┐
                                                   │  PostgreSQL (Docker) │
                                                   └──────────────────────┘
```
```
team-task-saas/
├── backend/
│   ├── prisma/
│   │   └── schema.prisma       ← Database schema (User, Team, Task)
│   └── src/
│       ├── index.ts            ← Express app entry point
│       ├── lib/prisma.ts       ← Prisma client singleton
│       ├── middleware/
│       │   └── authMiddleware.ts
│       └── routes/
│           ├── auth.ts         ← POST /auth/register, POST /auth/login
│           ├── tasks.ts        ← GET/POST/PATCH/DELETE /tasks
│           └── teams.ts        ← GET/POST /teams
└── frontend/
    └── src/
        ├── app/
        │   ├── auth/Login.tsx
        │   ├── dashboard/
        │   ├── tasks/
        │   └── teams/
        ├── context/AuthContext.tsx
        └── lib/fetcher.ts      ← Authenticated fetch wrapper
```

### API reference

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/auth/register` | No | Create a new account |
| POST | `/auth/login` | No | Log in, receive JWT |
| GET | `/teams` | Yes | List all teams (with tasks) |
| POST | `/teams` | Yes | Create a team |
| GET | `/tasks?teamId=` | Yes | List tasks (optional filter) |
| POST | `/tasks` | Yes | Create a task |
| PATCH | `/tasks/:id` | Yes | Update a task |
| DELETE | `/tasks/:id` | Yes | Delete a task |

## Resources

### Documentation

- [React](https://react.dev/) — Frontend UI library
- [Vite](https://vitejs.dev/) — Frontend build tool and dev server
- [React Router](https://reactrouter.com/) — Client-side routing
- [Express.js](https://expressjs.com/) — Node.js web framework
- [Prisma ORM](https://www.prisma.io/docs) — Database toolkit and query builder
- [PostgreSQL](https://www.postgresql.org/docs/) — Relational database
- [JSON Web Tokens (JWT)](https://jwt.io/introduction) — Stateless authentication standard
- [bcrypt](https://www.npmjs.com/package/bcryptjs) — Password hashing

### Articles and tutorials

- [REST API design best practices](https://restfulapi.net/)
- [JWT authentication in Node.js](https://blog.logrocket.com/jwt-authentication-best-practices/)
- [Prisma getting started guide](https://www.prisma.io/docs/getting-started)

### AI usage

Claude (claude.ai / Claude Code CLI) was used during this project for the following tasks:

- **Debugging**: Diagnosing a `Failed to fetch` error caused by the `User` model being missing from the Prisma schema, and generating the correct migration.
- **Code review**: Identifying that the backend was returning 500 errors on `/auth/register` due to `prisma.user` not existing in the generated client.
- **Boilerplate generation**: Scaffolding the Express route structure and Prisma schema definitions.
- **Documentation**: Drafting this README based on the actual project structure and code.
