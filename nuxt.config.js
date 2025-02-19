import colors from 'vuetify/es5/util/colors'
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  // Server configuration
  server: {
    host: '0.0.0.0',
    port: 8080
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Sugarcoated',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: "#C1C1C1"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // Add preconnect for Google Fonts
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true
      },
      // Add Google Fonts stylesheet
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Lora:wght@400;500;600;700&display=swap'
      }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/variables.css', // CSS Variables
    '~/assets/main.css'       // Global Styles
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/aos", mode: "client" },
    '@/plugins/vue-gtag'
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
    'nuxt-compress'
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // ...other modules you might already have
  ],
  axios: {
    baseURL: 'http://localhost:8080',  // Match your Nuxt server port
    proxy: false,
    retry: { retries: 3 },
    debug: true
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Add optimization for fonts
    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        name: true
      }
    }
  }
}