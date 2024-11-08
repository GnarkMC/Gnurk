import { defineConfig } from "astro/config";
import qwikdev from "@qwikdev/astro";

export default defineConfig({
  integrations: [qwikdev()],
  output: "static",
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
