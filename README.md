# Figma Widget Vite React TypeScript Template

This project is a comprehensive template designed to help you create Figma widgets using Vite, React, and TypeScript. It provides a minimal setup with Hot Module Replacement (HMR) for a seamless development experience and includes a robust ESLint configuration to ensure code quality and consistency.

## Features

- Vite for Fast Builds: Utilizes Vite's build system for rapid development and production builds, tailored for React applications.
- React with TypeScript: Leverages the power of React and TypeScript for developing Figma widgets, offering type safety and JSX support.
- ESLint Configured: Comes pre-configured with ESLint, including rules for React, TypeScript, import order, and custom rules to ensure high-quality, maintainable code.
- Figma Plugin and Widget Typings: Includes type definitions for developing Figma plugins and widgets, enabling IntelliSense and compile-time type checking.
- Custom JSX Factory for Figma Widgets: Configures a custom JSX factory (figma.widget.h) and fragment factory (figma.widget.Fragment) to work seamlessly with Figma's widget API.

## Getting Started

Clone the repository:

```
git clone https://github.com/your-username/figma-widget-vite-react-typescript-template.git
```

Install dependencies:

```
pnpm install
```

Start the development server:

```
pnpm run dev
```

Build for production:

```
pnpm run build
```

## Project Structure

- `src/main.tsx`: Entry point for the Figma widget. Contains JSX code for the widget UI.
- `vite.config.ts`: Configuration file for Vite, including custom settings for building Figma widgets.
- `.eslintrc`: Configuration file for ESLint, specifying rules and plugins for linting JavaScript/TypeScript code.

## Counter Widget Example

Included is a simple counter widget example demonstrating how to use React state, property menus, and Figma's widget API to create interactive widgets.

## License

This project is open-sourced under the MIT license. Feel free to fork, modify, and use it in your own projects.

For more information on developing Figma plugins and widgets, visit the [Figma Developer Documentation](https://www.figma.com/widget-docs/).
