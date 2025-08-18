import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // Main site pages
        "main-home": resolve(__dirname, "src/pages/main/index.html"),
        "main-about": resolve(__dirname, "src/pages/main/about.html"),
      },
    },
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    open: "/src/pages/main/index.html", // Auto-open main site
  },
});
