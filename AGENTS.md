# Agent Guidelines

## Research Workflow

1. **Always use Serena MCP tool first** - Start by querying Serena for context and information
2. **Always use Context 7 and Tavily** - Leverage these tools to get the most up-to-date documentation
3. **Verify information** - Cross-reference multiple sources when making architectural decisions

## Available Tools

- **Serena MCP** - Primary context and information retrieval tool
- **Context 7** - Documentation and context analysis
- **Tavily** - Web search for current documentation and best practices

## Project Context

### Tech Stack
- **Framework:** React Router v7 (with SSR enabled)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, `cva` for component variants, `tailwind-merge`
- **UI Components:** `react-aria-components` for accessible primitives
- **Icons:** `@remixicon/react`
- **Theme Management:** `remix-themes` (Dark/Light mode support)
- **Tooling:** Vite, Biome, CSpell, PostCSS

### Project Structure
- `app/routes/`: Route handler files
- `app/components/ui/`: Reusable UI components built with `react-aria-components`
- `app/configs/`: Configuration files
- `app/server/`: Server-side utilities
- `app/routes.ts`: Manual route configuration using `RouteConfig`
- `app/root.tsx`: Root layout component

## Code Conventions

### Code Style
- **Formatting:** Handled by Biome (`biome.json`)
  - Indentation: Tabs
  - Quotes: Single quotes for JSX
  - Trailing Commas: ES5
- **Imports:** Organized automatically by Biome
  - Use absolute imports (e.g., `import { Button } from "ui"`)
  - For react-aria-components, use `import * as RAC from 'react-aria-components'`

### Naming Conventions
- **Components:** PascalCase (e.g., `Button`, `DialogContent`)
- **Files:** kebab-case or PascalCase for components
- **Variables/Functions:** camelCase

### Component Structure
- **Functional Components:** Prefer functional components with hooks
- **Props:** Use `ComponentProps` (e.g., `ComponentProps<typeof RAC.Button>`)
- **Styling:** 
  - Use `cva` for defining component variants
  - Use `composeRenderProps` and `cx` for merging classes in `react-aria-components`
  - Inline Tailwind classes for one-off styling in routes/pages

### Accessibility
- Use `react-aria-components` primitives to ensure accessibility
- Always use `import * as RAC` for `react-aria-components`

## Development Commands

### Development
- `pnpm dev`: Start development server
- `pnpm start`: Start production server

### Build & Test
- `pnpm build`: Build for production
- `pnpm typecheck`: Run TypeScript type checking

### Code Quality
- `pnpm lint`: Run Biome to check and fix linting/formatting
- `pnpm spellcheck`: Run CSpell on the app directory

## Task Completion Checklist

Before considering a task complete:

1. **Formatting & Linting:** Run `pnpm lint`
2. **Type Checking:** Run `pnpm typecheck`
3. **Spell Check:** Run `pnpm spellcheck`
4. **Verification:** Test the feature in development (`pnpm dev`)
5. **Build Check:** Run `pnpm build` to ensure production build succeeds

## Best Practices

- Start with research before implementation
- Use multiple sources to verify technical details
- Check for latest versions and breaking changes
- Document any assumptions or decisions made during research
- Follow strict TypeScript usage for type safety
- Use manual route definitions in `app/routes.ts` using `index`, `route`, and `layout` from `@react-router/dev/routes`
