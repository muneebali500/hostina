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
        servers: resolve(__dirname, "servers.html"),
        vpsHosting: resolve(__dirname, "vps-hosting.html"),
        blog: resolve(__dirname, "blog.html"),
        gamesHosting: resolve(__dirname, "games-hosting.html"),
        dedicatedHosting: resolve(__dirname, "dedicated-hosting.html"),
        cart: resolve(__dirname, "cart.html"),
        cartConfigure: resolve(__dirname, "cart-configure.html"),
        checkout: resolve(__dirname, "checkout.html"),
        dashbMain: resolve(__dirname, "dashboard/main.html"),
        dashbOfferDetails: resolve(__dirname, "dashboard/offer-details.html"),
        dashbNewMember: resolve(__dirname, "dashboard/new-member.html"),
        dashbNewMemberData: resolve(
          __dirname,
          "dashboard/new-member-data.html"
        ),
        dashbProducts: resolve(__dirname, "dashboard/products.html"),
        dashbInvoices: resolve(__dirname, "dashboard/invoices.html"),
        dashbDomains: resolve(__dirname, "dashboard/domains.html"),
        dashbHosting: resolve(__dirname, "dashboard/hosting.html"),
        dashbDomainSearch: resolve(__dirname, "dashboard/domain-search.html"),
        dashbCart: resolve(__dirname, "dashboard/cart.html"),
        dashbCartConfigure: resolve(__dirname, "dashboard/cart-configure.html"),
        dashbBlogs: resolve(__dirname, "dashboard/blogs.html"),
        dashbBlogDetails: resolve(__dirname, "dashboard/blog-details.html"),
        dashbCheckout: resolve(__dirname, "dashboard/checkout.html"),
        dashbContact: resolve(__dirname, "dashboard/contact.html"),
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
