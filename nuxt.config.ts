import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/not-a-portfolio-project/',
  },
  modules: [
    '@pinia/nuxt',
  ],
  pinia: {
    autoImports: [
      'defineStore',
    ],
  },
  css: ['~/assets/css/main.css'],
  buildModules: ['@nuxtjs/style-resources'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  alias: {
    'store': fileURLToPath(new URL('./store', import.meta.url))
  }
});
