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
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'website',
        name: 'mytiki.com',
        content: "It's your data. Get paid for it.",
      },
      {
        name: 'description',
        content:
          'TIKI helps you take back control of your online data and privacy and get paid for it. With TIKI, you can see, control and monetize your online data.',
      },
      {
        name: 'title',
        content: "It's your data. Get paid for it.",
      },
      {
        property: 'og:title',
        content: "It's your data. Get paid for it.",
      },
      {
        property: 'og:description',
        content:
          'TIKI helps you take back control of your online data and privacy and get paid for it. With TIKI, you can see, control and monetize your online data.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://mytiki.com' },
      {
        property: 'og:image',
        content:
          'https://mytiki.com/og-img-d9216d73be474034a8208d3c613f72a8.png',
      },
      {
        property: 'twitter:title',
        content: "It's your data. Get paid for it.",
      },
      {
        property: 'twitter:description',
        content:
          'TIKI helps you take back control of your online data and privacy and get paid for it. With TIKI, you can see, control and monetize your online data.',
      },
      { property: 'twitter:url', content: 'https://mytiki.com' },
      { property: 'twitter:card', content: 'summary_large_image' },
      {
        property: 'twitter:image',
        content:
          'https://mytiki.com/og-img-d9216d73be474034a8208d3c613f72a8.png',
      },
      { property: 'twitter:site', content: '@my_tiki_' },
    ],
    link: [{ rel: 'icon', type: 'icons/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/styles/theme.sass',
    '@/assets/fonts/koara/Koara.css',
    '@/assets/fonts/montserrat/Montserrat.css',
    '@/assets/fonts/nunito/Nunito.css',
    '@/assets/fonts/nunito-sans/NunitoSans.css',
    '@/assets/fonts/marker-mark/MarkerMark.css',
  ],
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
  plugins: ['~/plugins/plausible.js'],
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
    [
      'nuxt-compress',
      {
        gzip: {
          cache: true,
        },
        brotli: {
          threshold: 10240,
        },
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    '@nuxtjs/axios',
    'vue-social-sharing/nuxt',
    '@nuxtjs/toast',
    'vue-scrollto/nuxt',
  ],
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
  router: {
    middleware: 'signup',
  },
}
