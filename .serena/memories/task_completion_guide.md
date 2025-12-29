# Task Completion Guide

Before considering a task complete, ensure the following steps are performed to maintain code quality and stability.

1.  **Formatting & Linting:**
    - Run `npm run lint` (or `pnpm lint`) to format code and fix linting issues using Biome.

2.  **Type Checking:**
    - Run `npm run typecheck` (or `pnpm typecheck`) to ensure there are no TypeScript errors.

3.  **Spell Check:**
    - Run `npm run spellcheck` (or `pnpm spellcheck`) to catch spelling errors.

4.  **Verification:**
    - If logic was changed, verify the feature works in the development environment (`npm run dev`).
    - If new components were added, ensure they follow the accessibility guidelines using `react-aria-components`.

5.  **Build Check (Optional but Recommended):**
    - Run `npm run build` to ensure the project builds successfully for production.
