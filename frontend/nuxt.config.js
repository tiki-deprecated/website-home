export default {
  /*
   ** Nuxt server side rendering
   ** See https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-ssr
   */
  ssr: false,
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
    title: 'TIKI',
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'website',
        name: 'mytiki.com',
        content: 'Own Your Data',
      },
      {
        name: 'description',
        content:
          'The internet is a mess. Data is at the center. User data ownership is the answer. Users control and license their data for real money; businesses stream real-time insights straight from the source. Everyone wins.',
      },
      {
        name: 'title',
        content: 'Own Your Data',
      },
      {
        property: 'og:title',
        content: 'Own Your Data',
      },
      {
        property: 'og:description',
        content:
          'The internet is a mess. Data is at the center. User data ownership is the answer. Users control and license their data for real money; businesses stream real-time insights straight from the source. Everyone wins.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://mytiki.com' },
      {
        property: 'og:image',
        content:
          'https://mytiki.com/og-img-ac578a37-a3b6-49f8-ac0b-c8868cb01322.png',
      },
      {
        property: 'twitter:title',
        content: 'Own Your Data',
      },
      {
        property: 'twitter:description',
        content:
          'The internet is a mess. Data is at the center. User data ownership is the answer. Users control and license their data for real money; businesses stream real-time insights straight from the source. Everyone wins.',
      },
      { property: 'twitter:url', content: 'https://mytiki.com' },
      { property: 'twitter:card', content: 'summary_large_image' },
      {
        property: 'twitter:image',
        content:
          'https://mytiki.com/og-img-ac578a37-a3b6-49f8-ac0b-c8868cb01322.png',
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
    '@/assets/fonts/nunito-sans/NunitoSans.css',
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
    '@nuxt/content',
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
    middleware: 'redirect',
  },
}
