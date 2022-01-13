module.exports = {
  publicPath: './',
  productionSourceMap: false,
  configureWebpack: {
    output: {
      filename: `js/[name].${+new Date}.js`,
      chunkFilename: `js/[name].${+new Date}.js`,
    }
  }
}