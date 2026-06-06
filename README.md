# CV Maker

`pnpm` workspace with two apps:

- `frontend` - React + Vite
- `backend` - NestJS

## Install

```bash
pnpm install
```

## Workspace commands

```bash
pnpm dev
pnpm build
pnpm lint
pnpm test
```

## App-specific commands

```bash
pnpm dev:frontend
pnpm dev:backend
pnpm build:frontend
pnpm build:backend
```

You can also run package scripts directly:

```bash
pnpm --filter ./frontend dev
pnpm --filter ./backend start:dev
```
