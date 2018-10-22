module.exports = function () {
  // Add .ts extension for store, middleware and more
  this.nuxt.options.extensions.push("ts");
  // Extend build
  this.extendBuild(config => {
    const tsLoader = {
      loader: "ts-loader",
      options: {
        appendTsSuffixTo: [/\.vue$/]

      },
      // may not be needed because I located dist outside src
      exclude: [
        /dist/,
        /\.temp/
      ]
    };
    // Add TypeScript loader
    config.module.rules.push(
      Object.assign({
          test: /((client|server)\.js)|(\.tsx?)$/
        },
        tsLoader
      )
    );
    // Add TypeScript loader for vue files
    // for (let rule of config.module.rules) {
    //   console.log('rule.loader =', rule.loader)
    //   if (rule.loader === "vue-loader") {
    //     console.log('rule.options', rule.options)

    //     rule.options.loaders.ts = tsLoader
    //   }
    // }
    // Add .ts extension in webpack resolve
    if (config.resolve.extensions.indexOf(".ts") === -1) {
      config.resolve.extensions.push(".ts");
    }
  });
};