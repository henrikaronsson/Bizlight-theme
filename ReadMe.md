# Bizlight Theme

A responsive Bootstrap 5 business theme built with Sass. This repository uses a
modern, npm-based development toolchain (Dart Sass + live-server).

## Resources

- YouTube tutorial: https://www.youtube.com/watch?v=pB7EwxwSfVk
- Original theme files: https://github.com/bradtraversy/bizlight_theme
- Dummy text: https://lipsum.com/
- Sass language guide: https://sass-lang.com/guide
- Stock photos: https://www.pexels.com/

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer (an `.nvmrc` is provided).

That's it — Sass, the dev server, and all front-end dependencies are installed
locally through npm. Bower and KOALA are no longer required.

## Setup

Install all dependencies (Bootstrap 5, Font Awesome, Dart Sass and the
dev server) from `package.json`:

```bash
npm install
```

## Development

Start the live-reloading dev server and Sass watcher together:

```bash
npm run dev
```

This runs two tasks in parallel:

- `watch:css` — recompiles `sass/app.scss` to `css/app.css` on every change.
- `serve` — serves the site at http://localhost:8000 with live reload.

### Useful scripts

| Script              | Description                                           |
| ------------------- | ----------------------------------------------------- |
| `npm run dev`       | Watch Sass and serve the site with live reload.       |
| `npm run build`     | One-off production build of `css/app.css` (minified). |
| `npm run build:css` | Compile Sass to minified CSS.                         |
| `npm run watch:css` | Recompile Sass on change.                             |
| `npm run serve`     | Serve the site on port 8000.                          |

## Build

Generate the minified stylesheet for deployment:

```bash
npm run build
```

## Project structure

```
sass/            Sass source (app.scss is the entry point)
css/             Compiled CSS output (generated)
js/              Theme JavaScript
img/ fonts/      Static assets
*.html           Theme pages
node_modules/    Front-end dependencies (installed via npm, not committed)
```

## Notes

- Front-end dependencies are resolved from `node_modules/` and are imported in
  `sass/app.scss` and referenced from the HTML pages.
- The UI is built with Bootstrap 5; Bootstrap's JavaScript bundle (with Popper)
  is loaded on each page and no longer depends on jQuery.

