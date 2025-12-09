// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
site: "https://cristiano1839.github.io
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
