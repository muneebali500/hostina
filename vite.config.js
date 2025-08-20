import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        contact: resolve(__dirname, "contact.html"),
        blogs: resolve(__dirname, "blogs.html"),
        login: resolve(__dirname, "login.html"),
        domains: resolve(__dirname, "domains.html"),
        hostingDetails: resolve(__dirname, "hosting-details.html"),
      },
    },
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    open: "index.html",
    port: 3000,
    host: true,
    hmr: {
      port: 3001,
    },
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
});
