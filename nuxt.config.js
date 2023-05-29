export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'event.misa-new',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/index.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui',
    '@/plugins/slugify',
    '~/plugins/vuex'
  ],  

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
  ],

  modules: ['@nuxtjs/axios'],

  axios: {

  },

  content: {
    // https://content.nuxtjs.org/api/configuration
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {
      // Include the compiler version of Vue so that <component-name> works
      config.resolve.alias["vue$"] = "vue/dist/vue.esm.js"
  }
  },
}
