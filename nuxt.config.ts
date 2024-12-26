export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  plugins: ['~/plugins/maska.client.js'],
  modules: ['@nuxtjs/tailwindcss'], // Only include this once
  app: {
    head: {
      title: 'Tashkent Parfum',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
    },
  },
});
