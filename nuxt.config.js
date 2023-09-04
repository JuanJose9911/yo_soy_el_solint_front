export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    lang: 'es',
    title: 'Creditos Sacas',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    script: [{ src: 'https://unpkg.com/flowbite@1.4.5/dist/flowbite.js' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/static/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-notification.js', mode: 'client' },
    '~/plugins/filters.js',
    '~/plugins/axios.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  router: {
    middleware: ['auth'],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
  ],

  auth: {
    strategies: {
      local: {
        redirect: {
          login: '/',
          logout: '/login',
          home: '/',
        },
        endpoints: {
          login: {
            url: '/api/auth/login',
            method: 'post',
            propertyName: 'access_token',
          },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/auth/user', method: 'get', propertyName: 'user' },
        },
        tokenRequired: true,
        tokenType: 'Bearer',
        globalToken: true,
        autoFetchUser: true,
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL || 'https://dev-api.creditos.sacas.com.co',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'es',
    },
  },

  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
