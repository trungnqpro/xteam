module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'XTeam',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Pulsar - We make modern web applications and websites' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      if (!ctx.isDev) {
        config.output.publicPath = '/'
      }
    },
    vendor: [
      'vee-validate'
    ],
    extractCSS: true,
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  },
  css: [
    '@/assets/scss/main.scss'
  ],
  plugins: [
    { src: '~/plugins/scroll-spy.js', ssr: false },
    { src: '~/plugins/smooth-scroll.js', ssr: false },
    '~/plugins/vee-validate.js'
  ],
  modules: [
    ['@nuxtjs/google-analytics', {ua: 'UA-99632110-3'}]
  ]
}
