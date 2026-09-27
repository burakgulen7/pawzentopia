// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH are provided by the GitHub Actions workflow
// (actions/configure-pages). Locally they default to a root install.
const site = process.env.SITE_URL || 'https://burakgulen7.github.io';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  image: {
    // Every photo is resized/re-encoded at build time, whatever its original size.
    responsiveStyles: false,
  },
  devToolbar: { enabled: false },
});
