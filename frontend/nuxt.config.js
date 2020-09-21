export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Tiki',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'website',
        name: 'mytiki.com',
        content: "Tiki. It's Your Data",
      },
      { name: 'og:title', content: 'Tiki' },
      {
        name: 'og:description',
        content:
          "It's your data, and its worth thousands. Take back control and get paid.",
      },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://mytiki.com' },
      { name: 'og:video', content: 'https://youtu.be/IP4UeduStUI' },
    ],
    link: [{ rel: 'icon', type: 'icons/x-icon', href: '/favicon.ico' }],
    script: [
      {
        async: true,
        defer: true,
        'data-domain': 'mytiki.com',
        src: 'https://plausible.io/js/plausible.js',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/styles/theme.sass', '@/assets/fonts/gadugi.css'],
  /*
   ** Style Resources
   */
  styleResources: {
    sass: ['./assets/styles/*.sass'],
    scss: ['./assets/styles/*.scss'],
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module,
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    '@nuxtjs/axios',
    'vue-social-sharing/nuxt',
    '@nuxtjs/toast',
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.devtool = 'eval-source-map'
      }
    },
  },
  /*
   ** Generate configuration
   ** See https://nuxtjs.org/api/configuration-generate/
   */
  generate: {
    fallback: false,
  },
  /*
   ** Axios configuration
   ** See https://axios.nuxtjs.org/
   */
  axios: {},
}
