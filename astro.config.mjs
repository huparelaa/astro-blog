import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://chic-sopapillas-614dee.netlify.app/",
  integrations: [preact()]
});