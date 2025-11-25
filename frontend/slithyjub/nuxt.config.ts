// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],

  i18n: {
    locales: [
      { code: "en", iso: "en-US", file: "en.json" },
      { code: "it", iso: "it-IT", file: "it.json" }
    ],
    defaultLocale: "en",
    lazy: true,
    langDir: "locales",
    strategy: "no_prefix",
    vueI18n: './i18n/i18n.config.ts'
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ["@nuxtjs/i18n"],
})