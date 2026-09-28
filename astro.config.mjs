// @ts-check
import { defineConfig } from 'astro/config';

// Hosted on GitHub Pages at https://rickynarwal85.github.io/ajh-site/
// When moving to the real domain, set `site` to it and remove `base`.
export default defineConfig({
  site: 'https://rickynarwal85.github.io',
  base: process.env.BASE_PATH || '/ajh-site',
  trailingSlash: 'always',
});
