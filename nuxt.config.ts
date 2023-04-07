import { fileURLToPath } from 'url';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  app: {
    baseURL: '/not-a-portfolio-project/',
    head: {
      title: 'emoji confetti',
      meta: [{ 'http-equiv': 'Permissions-Policy' }, {'content': 'interest-cohort=()'}], //cross origin control gh-pages fix
    },
  },
  modules: ['@pinia/nuxt'],
  pinia: {
    autoImports: ['defineStore'],
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  alias: {
    store: fileURLToPath(new URL('./store', import.meta.url)),
  },
});
