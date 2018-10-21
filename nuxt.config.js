const pkg = require("./package");

module.exports = {
  srcDir: './src',
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: pkg.description
      }
    ],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }]
  },
  /** 
   * middleware located here will be called before every route change
   * 
   */

  router: {
    middleware: 'route-change'
  },
  /**
   * small middleware function that does nothing but next()
   */

  serverMiddleware: [
    "./api/index"
  ],

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#3b8070"
  },

  /*
   ** Global CSS
   */
  // css: [],
  // css: ["~/assets/style/main.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    "./modules/typescript.js",
    ['nuxt-sass-resources-loader', './assets/style/main.scss']
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
