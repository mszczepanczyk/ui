# @mariusz.sh/ui Example

This example application showcases all components from the [@mariusz.sh/ui](../) component library.

## Overview

A live demonstration of the UI component library built with:
- **Vite** - Fast build tool and dev server
- **React 19** - Latest React features
- **TypeScript** - Type safety
- **Panda CSS** - Styling system
- **@mariusz.sh/ui** - Component library

## Getting Started

### Prerequisites

- Node.js >= 20
- npm >= 10

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the component showcase.

### Build

Build the example app for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
example/
├── src/
│   ├── App.tsx           # Main component showcase
│   ├── main.tsx          # Application entry point
│   └── index.css         # Panda CSS layers
├── panda.config.ts       # Panda CSS configuration
└── package.json
```

## Components Showcased

This example demonstrates all available components:

- **Button** - Multiple variants (solid, outline, ghost, link) and sizes
- **ButtonGroup** - Grouped button layouts
- **Input** - Text input with various sizes
- **Spinner** - Loading spinner with different sizes
- **Loader** - Loading overlay component
- **Group** - Horizontal layout grouping
- **Span** - Text span with color variants
- **AbsoluteCenter** - Center content absolutely within a container

## Using the Library

The library is referenced locally via `file:..` in package.json. To use it in your own project:

```bash
npm install @mariusz.sh/ui react@^19 react-dom@^19
```

Then import components:

```tsx
import { Button, Input, Spinner } from "@mariusz.sh/ui";

function MyApp() {
  return (
    <div>
      <Button variant="solid">Click me</Button>
      <Input placeholder="Enter text..." />
      <Spinner />
    </div>
  );
}
```

## Styling

This example uses Panda CSS for styling, which is the same system used by the component library. The styled-system is generated from `panda.config.ts`.

## Learn More

- [Main Library Documentation](../CLAUDE.md)
- [Vite Documentation](https://vite.dev/)
- [React Documentation](https://react.dev/)
- [Panda CSS Documentation](https://panda-css.com/)
