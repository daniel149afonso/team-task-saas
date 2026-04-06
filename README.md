### Frontend:

```bash
src/
 ├─ app/
 │   ├─ layout.tsx
 │   ├─ page.tsx                ← Landing page
 │   ├─ dashboard/
 │   │    └─ page.tsx           ← Dashboard utilisateur
 │   ├─ tasks/
 │   │    ├─ page.tsx           ← Page Tasks
 │   │    ├─ components/
 │   │    │     ├─ TaskList.tsx
 │   │    │     ├─ TaskItem.tsx
 │   │    │     └─ TaskForm.tsx
 │   │    └─ api/
 │   │          └─ tasks.api.ts
 │   ├─ teams/
 │   │    └─ page.tsx           ← Page Teams
 │   ├─ auth/
 │   │    ├─ login/page.tsx
 │   │    └─ register/page.tsx
 │   └─ (autres pages)
 │
 ├─ components/                 ← Composants globaux (Navbar, Sidebar…)
 │
 ├─ lib/
 │   ├─ fetcher.ts              ← Wrapper fetch
 │   ├─ auth.ts                 ← Gestion token côté client
 │   └─ utils.ts                ← Fonctions utilitaires
 │
 ├─ styles/
 │   └─ globals.css
 │
 └─ types/
     └─ task.ts                 ← Types partagés
```

### Backend:

```bash
src/
 ├─ main.ts
 ├─ app.module.ts
 │
 ├─ auth/
 │   ├─ auth.module.ts
 │   ├─ auth.controller.ts
 │   ├─ auth.service.ts
 │   ├─ dto/
 │   │    ├─ login.dto.ts
 │   │    └─ register.dto.ts
 │   └─ strategies/
 │        └─ jwt.strategy.ts
 │
 ├─ users/
 │   ├─ users.module.ts
 │   ├─ users.controller.ts
 │   ├─ users.service.ts
 │   └─ dto/
 │
 ├─ teams/
 │   ├─ teams.module.ts
 │   ├─ teams.controller.ts
 │   ├─ teams.service.ts
 │   └─ dto/
 │
 ├─ tasks/
 │   ├─ tasks.module.ts
 │   ├─ tasks.controller.ts
 │   ├─ tasks.service.ts
 │   └─ dto/
 │
 ├─ prisma/
 │   ├─ prisma.module.ts
 │   └─ prisma.service.ts
 │
 └─ common/
     ├─ guards/
     ├─ decorators/
     └─ interceptors/
```

### Database:

```bash
prisma/
 ├─ schema.prisma
 ├─ migrations/
 └─ seed.ts
```