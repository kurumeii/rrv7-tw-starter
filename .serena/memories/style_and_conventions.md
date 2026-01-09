# Code Style and Conventions

## Formatting & Linting
*   **Tool:** Biome (`biome.json`)
*   **Indentation:** Tabs
*   **Quotes:** Single quotes for JSX
*   **Trailing Commas:** ES5
*   **Command:** `pnpm lint` (checks and fixes)

## Naming Conventions
*   **Components:** PascalCase (e.g., `Button`, `DialogContent`)
*   **Files:** kebab-case or PascalCase for components
*   **Variables/Functions:** camelCase

## Imports
*   **Organization:** Handled automatically by Biome.
*   **Absolute Imports:** Use absolute imports where configured (e.g., `import { Button } from "ui"`).
*   **React Aria Components:** Always use namespace import: `import * as RAC from 'react-aria-components'`
*   **Tailwind Variants:** Use `import { tv } from 'app/configs/ui.config'`

## Component Structure
*   **Type:** Functional components with hooks.
*   **Props:** Use `ComponentProps<typeof RAC.Component>` for RAC-based components.
*   **Styling:**
    *   Use `tv` from `app/configs/ui.config` for defining component variants.
    *   Use `composeRenderProps` and `cx` for merging classes in `react-aria-components`.
    *   Inline Tailwind classes are acceptable for one-off styling in routes/pages.

## Accessibility
*   Use `react-aria-components` primitives to ensure accessibility.

## Routing
*   Use manual route definitions in `app/routes.ts` using `index`, `route`, and `layout` helpers from `@react-router/dev/routes`.
