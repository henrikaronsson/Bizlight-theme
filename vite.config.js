import { resolve } from "node:path";
import { defineConfig } from "vite";

const pages = ["index", "about", "services", "contact", "readme"];

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [
          page,
          resolve(import.meta.dirname, `src/${page}.html`),
        ]),
      ),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Bootstrap's own Sass still uses @import and legacy color
        // functions internally; silence its deprecation noise without
        // hiding warnings from project code.
        quietDeps: true,
        silenceDeprecations: ["import"],
      },
    },
  },
});
