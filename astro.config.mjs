import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

const { BASE_URL } = loadEnv(process.env.NODE_ENV || "", process.cwd(), "");

export default defineConfig({
  site: BASE_URL || "https://eamz.netlify.app",
  output: "static",
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
