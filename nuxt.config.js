import colors from 'vuetify/es5/util/colors'

export default {
  // Enable server-side rendering
  ssr: true,

  // Target: server
  target: 'server',

  // Server Configuration
  server: {
    port: process.env.PORT || 3000, // Listen on the PORT environment variable
    host: '0.0.0.0' // Listen on all network interfaces
  },

  // Global page headers
  head: {
    titleTemplate: process.env.IS_AGENCY === '1' ? 'Sugarcoated' : 'Sugarcoated',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: "#C1C1C1" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS
  css: [],

  // Plugins to run before rendering page
  plugins: [
    { src: "@/plugins/aos", mode: "client" },
    '@/plugins/vue-gtag'
  ],

  // Auto import components
  components: true,

  // Environment Variables
  env: {
    IS_AGENCY: process.env.IS_AGENCY === '1'
 
