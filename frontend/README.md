# Frontend — Team Task Manager

React single-page application for Team Task Manager. Communicates with the Express backend via HTTP/JSON using JWT authentication.

## Stack

| Tool | Version | Role |
|------|---------|------|
| React | 19 | UI library |
| TypeScript | 5.9 | Static typing |
| Vite | 7 | Build tool & dev server |
| React Router DOM | 7 | Client-side routing |

## Installation

```bash
npm install
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server on `http://localhost:5173` |
| `npm run build` | Compile TypeScript + bundle for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Structure

```
src/
├── main.tsx                    ← React entry point
├── App.tsx                     ← Router setup & protected routes
├── context/
│   └── AuthContext.tsx         ← Auth state (token, user, login, logout)
├── lib/
│   └── fetcher.ts              ← Authenticated fetch wrapper (injects JWT)
├── domain/
│   ├── types.ts                ← Shared TypeScript types (User, Team, Task)
│   └── task.ts                 ← Task-specific types
└── app/
    ├── Layout.tsx              ← Shared layout (navbar, sidebar)
    ├── auth/
    │   └── Login.tsx           ← Login & register form
    ├── dashboard/
    │   └── Dashboard.tsx       ← Home page after login
    ├── tasks/
    │   ├── TasksPage.tsx       ← Tasks page
    │   ├── api/
    │   │   └── tasks.api.ts    ← API calls for tasks
    │   └── components/
    │       ├── TaskList.tsx
    │       └── TaskForm.tsx
    └── teams/
        ├── TeamsPage.tsx       ← Teams page
        ├── api/
        │   └── teams.api.ts    ← API calls for teams
        └── components/
            ├── TeamList.tsx
            └── TeamForm.tsx
```

## Key concepts

**AuthContext** — stores the JWT token and user in `localStorage`. Exposes `login`, `register`, and `logout` functions consumed anywhere via `useAuth()`.

**fetcher** — thin wrapper around `fetch` that automatically injects the `Authorization: Bearer <token>` header. Redirects to `/login` on a 401 response.

**Protected routes** — `ProtectedRoute` in `App.tsx` checks for a token before rendering any authenticated page. Unauthenticated users are redirected to `/login`.

## Environment

The backend URL is currently hardcoded as `http://localhost:3000`. Make sure the backend is running before starting the frontend.
