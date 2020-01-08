module.exports = {
  publicPath: './',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/styles/_variable.scss";`
      }
    }
  }
}
