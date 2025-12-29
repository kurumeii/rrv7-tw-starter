# Project Overview

This project is a React Router v7 starter template designed for modern web development. It integrates a robust tech stack to provide a solid foundation for building scalable and maintainable applications.

## Tech Stack
- **Framework:** React Router v7 (with SSR enabled)
- **Language:** TypeScript
- **Styling:** 
  - Tailwind CSS v4
  - `cva` (Class Variance Authority) for component variants
  - `tailwind-merge` for class conflict resolution
- **UI Components:** `react-aria-components` for accessible primitives
- **Icons:** `@remixicon/react`
- **Theme Management:** `remix-themes` (Dark/Light mode support)
- **Tooling:**
  - Vite (Build tool)
  - Biome (Linting and Formatting)
  - CSpell (Spell checking)
  - PostCSS

## Project Structure
- `app/`: Contains the main application source code.
  - `routes/`: Route handler files.
  - `components/ui/`: Reusable UI components (e.g., Button, Dialog) built with `react-aria-components`.
  - `configs/`: Configuration files (e.g., `cva.config.ts`).
  - `server/`: Server-side utilities (e.g., theme session management).
  - `routes.ts`: Manual route configuration using `RouteConfig`.
  - `root.tsx`: The root layout component.
  - `app.css`: Global styles.
- `public/`: Static assets.
