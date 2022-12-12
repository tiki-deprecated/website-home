/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'TIKI | Choose Better Data',
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'website',
        name: 'mytiki.com',
        content: 'Choose better data',
      },
      {
        name: 'description',
        content: 'Choose better data',
      },
      {
        name: 'title',
        content: 'TIKI',
      },
      {
        property: 'og:title',
        content: 'TIKI',
      },
      {
        property: 'og:description',
        content: 'Choose better data',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://mytiki.com' },
      {
        property: 'og:image',
        content:
          'https://mytiki.com/og-img-ce633683-a1a1-44c0-8433-546cf4476de6.png',
      },
      {
        property: 'twitter:title',
        content: 'TIKI',
      },
      {
        property: 'twitter:description',
        content: 'Choose better data',
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
  css: [
    '@/assets/fonts/montserrat/stylesheet.css',
    '@/assets/fonts/nunito-sans/stylesheet.css',
    '@/assets/fonts/koara/stylesheet.css',
    '@/assets/fonts/space-grotesk/stylesheet.css',
  ],
  styleResources: {
    sass: ['@/assets/styles/*.sass'],
    scss: ['@/assets/styles/*.scss'],
  },
  plugins: ['~/plugins/plausible.js'],
  components: true,
  buildModules: [
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
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.devtool = 'eval-source-map'
      }
    },
  },
  generate: {
    fallback: false,
  },
  axios: {},
  router: {},
}
