## Workflow – Personal Jira Workflow Tracker

**Workflow** is a small Next.js app for tracking Jira tickets you are currently working on or have worked on in the past.  
It stores items in a Turso (libSQL) database accessed via Prisma and provides a simple UI to view and manage items (branches, status, points, board, dates, etc.).

---

## Tech Stack

- **Framework**: Next.js `app/` router (React)
- **Database**: Turso (libSQL)
- **ORM**: Prisma
- **Client**: `@libsql/client` with Prisma `@prisma/adapter-libsql`
- **Styling / UI**: Tailwind CSS 4, shadcn/ui, Base UI, lucide-react

---

## Requirements

- Node.js 20+ (recommended)
- A Turso account and a database
- `pnpm`, `npm`, `yarn`, or `bun` (examples below use `pnpm`)

---

## Installation

Clone the repo and install dependencies:

```bash
git clone <this-repo-url> workflow
cd workflow

# using pnpm (recommended)
pnpm install

# or with npm
npm install
```

---

## Environment variables

Create a `.env` file in the project root and define at least the Turso/libSQL connection variables used by Prisma:

```bash
cp .env.example .env   # if available, otherwise create .env manually
```

Typical values you will need (names may differ based on how you wired `lib/prisma.ts`):

```bash
TURSO_DATABASE_URL="libsql://<your-db-name>-<org>.turso.io"
TURSO_AUTH_TOKEN="<your-turso-auth-token>"
```

If you also use Jira integration (via `jira.js`), add your Jira credentials (adjust names to match your code in `lib` / `actions`):

```bash
JIRA_HOST="your-domain.atlassian.net"
JIRA_EMAIL="you@example.com"
JIRA_API_TOKEN="your-api-token"
```

Check `lib/prisma.ts` and any Jira-related files for the exact variable names and update `.env` accordingly.

---

## Prisma & Turso setup

### 1. Create a Turso database

1. Install Turso CLI and log in (see Turso docs).
2. Create a database, e.g.:

```bash
turso db create workflow-db
```

3. Get the URL and auth token:

```bash
turso db list                 # find your DB name
turso db show workflow-db     # shows URL
turso db tokens create workflow-db
```

4. Put the URL and token into `.env` as `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN`.

### 2. Configure Prisma datasource

The Prisma schema lives in `prisma/schema.prisma` and defines the `Item` model:

```prisma
datasource db {
  provider = "sqlite"
}

model Item {
  id         String   @id @unique
  branch     String
  status     String
  points     Int
  board      String
  startedAt  String
  finishedAt String
  createdAt  DateTime @default(now())
}
```

When using Turso/libSQL, the actual connection is handled in `lib/prisma.ts` using the `@prisma/adapter-libsql` adapter and `@libsql/client`. Make sure that file reads from your `.env` variables (`TURSO_DATABASE_URL`, `TURSO_AUTH_TOKEN`) and passes a libSQL client into the Prisma adapter.

### 3. Push schema and generate client

Run the following to sync schema to the database and generate the client:

```bash
# sync Prisma schema to Turso
pnpx prisma db push

# generate the Prisma client
pnpx prisma generate
```

You can open Prisma Studio to inspect items:

```bash
pnpm studio
```

---

## Development

Run the development server:

```bash
pnpm dev
```

Then open `http://localhost:3000` in your browser.

The main entry point for the UI is in `app/` (for example `app/page.tsx`), with supporting components in `components/`. Items are stored in the `Item` table defined in the Prisma schema and accessed through the Prisma client in `lib/prisma.ts`.

---

## Production build

```bash
pnpm build
pnpm start
```

Deploy as a standard Next.js app (e.g. Vercel, Fly.io, etc.). Make sure all required environment variables are configured in your hosting provider.

---

## Notes

- This app is intended as a personal workflow/Jira helper, not a multi-tenant project management tool.
- If you change the `Item` model in `prisma/schema.prisma`, re-run:

```bash
pnpx prisma db push
pnpx prisma generate
```
