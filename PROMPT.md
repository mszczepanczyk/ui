# @mariusz.sh/ui

A TypeScript UI component library built on Park UI, Ark UI, and Panda CSS.

## Project Overview

A fully-typed, accessible, themeable React component library with excellent developer experience. The library uses factory functions to create components, allowing users to extend variants while maintaining full type safety.

## Decisions Made

### Tech Stack
- **Package manager:** npm (enforced via `engines` in package.json)
- **Build tool:** Vite (for library build + docs)
- **React:** Latest version (no backward compatibility concerns)
- **Styling:** Panda CSS
- **Component base:** Park UI (built on Ark UI for accessibility)
- **Target:** SPAs only, no SSR/RSC support needed

### Project Structure
- Single project (not a monorepo)
- `example/` folder contains a separate example project (independent npm package)
- Build outputs:
  - `npm run build:lib` - builds library to `dist/`
  - `npm run build:docs` - builds documentation to `dist/docs/`
  - `npm run build` - builds both
  - Example project has its own build inside `example/`

### Component API Pattern
- **Recipe pattern** using Panda CSS `cva()` for variants
- **Factory function pattern** for extensibility

Every component uses a `create<Component>` factory:

```tsx
// Library defines createButton and uses it for default Button
export const createButton = (config) => { /* ... */ }
export const Button = createButton({ /* default variants */ })

// Users extend the same way
import { createButton } from '@mariusz.sh/ui'
export const Button = createButton({
  variants: {
    variant: {
      gradient: { /* custom variant */ }
    },
    size: {
      xl: { /* custom size */ }
    }
  }
})
```

Users get:
- Full type inference for custom variants
- Ability to extend/override any variant
- Same API the library uses internally

### Theming
- React Context for theme management
- User-changeable themes with default theme included
- Users can add custom themes and tokens

### Quality & Tooling
- Biome for linting and formatting
- React Cosmos for component playground
- Full TypeScript with strict mode
- Tree-shakeable exports

## Constraints

- **Accessibility first:** All components must be accessible (handled by Ark UI foundation)
- **Responsive:** Components work across screen sizes
- **Type safety:** Use advanced TypeScript features for DX
- **No reinventing wheels:** Use existing libraries where appropriate
- **Use official CLI generators:** Always use official CLI tools to scaffold configs (Vite, Panda CSS, Biome, Park UI, Cosmos) instead of writing from scratch. Customize the generated configs as needed.
- **Iterative development:** Ask questions when unsure, stop when stuck

## First Iteration Goals

Project scaffolding with:
- [ ] Package.json with npm engine lock
- [ ] Vite + TypeScript config
- [ ] Panda CSS setup
- [ ] Park UI integration
- [ ] Biome config
- [ ] VSCode settings
- [ ] Basic component factory pattern (Button, Input)
- [ ] Theme context setup
- [ ] Example project structure
- [ ] React Cosmos playground
- [ ] CLAUDE.md with project conventions

## File Structure (Planned)

```
@mariusz.sh/ui/
├── src/
│   ├── components/
│   │   ├── button/
│   │   │   ├── index.ts
│   │   │   ├── create-button.tsx
│   │   │   ├── button.tsx
│   │   │   └── button.recipe.ts
│   │   └── input/
│   │       └── ...
│   ├── theme/
│   │   ├── context.tsx
│   │   ├── default-theme.ts
│   │   └── types.ts
│   ├── hooks/
│   ├── utils/
│   └── index.ts
├── example/
│   ├── package.json
│   ├── src/
│   └── ...
├── docs/
├── cosmos/
├── panda.config.ts
├── vite.config.ts
├── biome.json
├── tsconfig.json
├── package.json
├── CLAUDE.md
├── PROMPT.md
└── README.md
```

## Links & References

- [Park UI](https://park-ui.com/)
- [Ark UI](https://ark-ui.com/)
- [Panda CSS](https://panda-css.com/)
- [React Cosmos](https://reactcosmos.org/)
