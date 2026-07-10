# Bizlight Theme

A responsive Bootstrap 5 business theme built with Vite and Sass.

## Resources

- YouTube tutorial: https://www.youtube.com/watch?v=pB7EwxwSfVk
- Original theme files: https://github.com/bradtraversy/bizlight_theme
- Dummy text: https://lipsum.com/
- Sass language guide: https://sass-lang.com/guide
- Stock photos: https://www.pexels.com/

## Prerequisites

- [Node.js](https://nodejs.org/) 20 or newer (an `.nvmrc` is provided).

Everything else (Vite, Dart Sass, Bootstrap 5, Bootstrap Icons) is installed
locally through npm.

## Getting started

```bash
npm install     # install dependencies
npm run dev     # dev server with hot reload at http://localhost:5173
npm run build   # production build into dist/
npm run preview # serve the production build locally
```

## Project structure

```
src/
  index.html        Home page (plus about/services/contact/readme pages)
  js/main.js        Single ES-module entry: styles + Bootstrap behaviour
  styles/
    main.scss       Style entry point (@use modules only)
    _tokens.scss    Project design tokens (Sass token + CSS custom properties)
    _layout.scss    Page bands: showcase, sections, title bar, footer
    _components.scss  Bootstrap component theming via documented CSS variables
  assets/img/       Images (processed and hashed by Vite)
vite.config.js      Multi-page Vite configuration
dist/               Production output (generated, not committed)
```

## Architecture notes

- **Bootstrap integration** — Bootstrap is treated as an external framework.
  Its only compile-time configuration is `$primary` (set from the project
  token in `main.scss`); all other theming goes through Bootstrap's
  documented CSS custom properties (`--bs-navbar-*`, `--bs-card-*`,
  `--bs-btn-*`) and the `data-bs-theme` attribute.
- **Design tokens** — project colours live as CSS custom properties
  (`--theme-*`) defined in `src/styles/_tokens.scss`. The darker footer shade
  is derived at runtime with native `color-mix()`.
- **JavaScript** — no jQuery, no globals. `src/js/main.js` imports only
  Bootstrap's Collapse module (navbar toggler + accordion) as an ES module.
- **Sass** — modern Dart Sass with `@use`; no `@import` in project code.
