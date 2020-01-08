module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 192, // 根据设计图尺寸写，设计图是1920，就写192
      propList: ['*'],
      selectorBlackList: ['px-ignore']
    }
  }
}