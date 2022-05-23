export default {
  target:'static', // use 'SSG' web application
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  buildModules: [
    '@nuxt/postcss8',
  ],
  head: {
    title: "Rint's Portfolio Website",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'rintのポートフォリオサイト' }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}, // accessing '/static/favicon.ico'
    ],
  },
  css: [
    '@/assets/css/main.css',
  ]
}