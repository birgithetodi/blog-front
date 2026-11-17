// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  telemetry: false,

  modules: [
    '@nuxt/ui',
    '@element-plus/nuxt'
  ],

  css: ['~/assets/css/main.css'],
})

