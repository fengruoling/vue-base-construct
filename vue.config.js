module.exports = {
  publicPath: './',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/_variable.scss";`
      }
    }
  }
}
