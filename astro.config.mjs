import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: import.meta.env.PROD ? '/exterminio-page/' : '/',
  integrations: [tailwind()]
});