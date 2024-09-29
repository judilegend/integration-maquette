// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // Add these configurations
  nitro: {
    routeRules: {
      "/socket.io/**": { proxy: "http://localhost:3000/socket.io" },
    },
  },
  css: ["@/assets/css/tailwind.css"],
  vite: {
    optimizeDeps: {
      exclude: ["vue-demi"],
    },
  },
  build: {
    transpile: ["vue-demi"],
  },
});
