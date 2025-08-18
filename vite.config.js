import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // This should be at project root
        about: resolve(__dirname, "src/pages/main/about.html"),
        contact: resolve(__dirname, "src/pages/main/contact.html"),
      },
    },
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    open: "/src/pages/main/index.html", // For dev server
  },
});
