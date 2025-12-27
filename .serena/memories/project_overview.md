# Project Overview: rrv7-tw-starter

This project is a React Router v7 starter template configured with modern tooling.

## Core Stack
- **Framework:** React Router v7 (`@react-router/*` packages)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`, `tailwindcss`)
- **UI Components:** React Aria Components (`react-aria-components`) with `tailwindcss-react-aria-components`
- **Theming:** Remix Themes (`remix-themes`)
- **Utilities:** 
  - `cva` (Class Variance Authority) for component variants
  - `tailwind-merge` for class merging
  - `@remixicon/react` for icons

## Tooling
- **Build Tool:** Vite
- **Linting & Formatting:** Biome (`@biomejs/biome`)
- **Spell Checking:** CSpell
- **Type Checking:** TypeScript (`tsc`) with React Router type generation (`react-router typegen`)

## Scripts
- `dev`: Start development server
- `build`: Build for production
- `start`: Start production server
- `typecheck`: Run type generation and check
- `lint`: Run Biome check (with auto-fix)
- `spellcheck`: Run CSpell

## Key Configuration Files
- `react-router.config.ts`
- `vite.config.ts`
- `biome.json`
- `cspell.json`
- `app/routes.ts` (Routing configuration)

## Project Structure
- `app/components/ui/`: Reusable UI components (Button, Dialog, etc.)
- `app/server/`: Server-side utilities (e.g., `themes.server.ts`)
- `app/routes/`: Route modules (pages and API resources)
- `app/assets/`: Static assets (e.g., dictionaries)
