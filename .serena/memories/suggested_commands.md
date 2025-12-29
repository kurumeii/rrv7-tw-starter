# Suggested Commands

## Development
- `pnpm dev` or `npm run dev`: Starts the development server (`react-router dev`).
- `pnpm start` or `npm start`: Starts the production server (`react-router-serve`).

## Build & Test
- `pnpm build` or `npm run build`: Builds the application for production (`react-router build`).
- `pnpm typecheck` or `npm run typecheck`: Runs TypeScript type checking (`react-router typegen && tsc`).

## Code Quality
- `pnpm lint` or `npm run lint`: Runs Biome to check and fix linting/formatting issues (`biome check --write app`).
- `pnpm spellcheck` or `npm run spellcheck`: Runs CSpell on the `app` directory (`cspell app`).

*Note: The project likely uses `pnpm` based on the presence of `pnpm-lock.yaml`, but `npm` scripts work if dependencies are installed.*
