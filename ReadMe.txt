Bizlight Theme
==================================================

A responsive Bootstrap 5 business theme built with Sass, using a modern
npm-based development toolchain (Dart Sass + live-server).

Web resources
--------------------------------------------------
Youtube tutorial: https://www.youtube.com/watch?v=pB7EwxwSfVk
Theme files:      https://github.com/bradtraversy/bizlight_theme
Dummy text:       https://lipsum.com/
Sass lang:        https://sass-lang.com/guide
PEXELS.com:       https://www.pexels.com/
--------------------------------------------------

Prerequisites:
--------------------------------------------------
Node.js 18 or newer: https://nodejs.org/
(Sass, the dev server and all front-end dependencies are installed via npm.
 Bower and KOALA are no longer required.)

--------------------------------------------------
SETUP
--------------------------------------------------
# Install dependencies (Bootstrap 5, Font Awesome, Dart Sass, dev server)
> npm install

--------------------------------------------------
DEVELOPMENT
--------------------------------------------------
# Watch Sass and serve the site with live reload (http://localhost:8000)
> npm run dev

--------------------------------------------------
BUILD
--------------------------------------------------
# Compile the minified stylesheet for deployment
> npm run build

--------------------------------------------------
SCRIPTS
--------------------------------------------------
npm run dev        Watch Sass and serve the site with live reload
npm run build      One-off minified build of css/app.css
npm run build:css  Compile Sass to minified CSS
npm run watch:css  Recompile Sass on change
npm run serve      Serve the site on port 8000

