import getRoutes from './utils/getRoutes'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  generate: {
    fallback: true,
  },
  server: {
    port: 3000,
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Estéban SOUBIRAN',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "Portfolio d'Estéban SOUBIRAN !",
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Estéban Soubiran',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@soubiran25' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://esteban-soubiran.site/preview.png',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://esteban-soubiran.site/preview.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: "Portfolio d'Estéban SOUBIRAN !",
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://esteban-soubiran.site/preview.png',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    ],
    htmlAttrs: {
      lang: 'fr',
    },
  },

  loading: {
    color: '#D7D7D7',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/main.css', '@/assets/css/tailwind.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/directives', '~/plugins/analytics.client'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '~/components/atoms',
    '~/components/atoms/icons',
    '~/components/atoms/logos',
    '~/components/atoms/texts',
    '~/components/organisms',
    '~/components/molecules',
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://tailwindcss.com/docs/guides/nuxtjs
    '@nuxt/postcss8',
    // https://image.nuxtjs.org
    '@nuxt/image',
    // https://composition-api.nuxtjs.org
    '@nuxtjs/composition-api/module',
  ],

  robots: {
    UserAgent: '*',
    Allow: '/',
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://www.npmjs.com/package/@nuxtjs/robots
    '@nuxtjs/robots',
    // https://motion.vueuse.org/
    'nuxt-use-motion',
    // https://sitemap.nuxtjs.org
    '@nuxtjs/sitemap',
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  // Sitemap module configuration (https://sitemap.nuxtjs.org)
  sitemap: {
    hostname: process.env.BASE_URL,
    trailingSlash: true,
    routes() {
      return getRoutes()
    },
  },
}
