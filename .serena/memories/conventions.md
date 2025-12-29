# Code Conventions

## Code Style
- **Formatting:** Handled by Biome (`biome.json`).
  - Indentation: Tabs
  - Semicolons: As needed
  - Quotes: Single quotes for JSX
  - Trailing Commas: ES5
- **Imports:** Organized automatically by Biome. 
  - Absolute imports are configured (e.g., `import { Button } from "ui"`).

## Naming Conventions
- **Components:** PascalCase (e.g., `Button`, `DialogContent`).
- **Files:** 
  - React Components: kebab-case or PascalCase (consistency to be observed). Route files follow React Router conventions (e.g., `_home._index.tsx`).
  - Utilities: camelCase or kebab-case.
- **Variables/Functions:** camelCase.

## Component Structure
- **Functional Components:** Prefer functional components with hooks.
- **Props:** Define props interfaces (e.g., `interface ButtonProps extends ...`).
- **Styling:** 
  - Use `cva` for defining component variants.
  - Use `composeRenderProps` and `cx` for merging classes in `react-aria-components`.
  - Inline Tailwind classes for one-off styling in routes/pages.

## Best Practices
- **Accessibility:** Use `react-aria-components` primitives to ensure accessibility.
- **Type Safety:** strict TypeScript usage.
- **Routing:** Use manual route definitions in `app/routes.ts` using `index`, `route`, and `layout` from `@react-router/dev/routes`.
