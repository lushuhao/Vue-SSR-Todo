module.exports = (isDev) => {
  return {
    preserveWhitespace: true, // 去除template中的空格
    extractCss: !isDev, // 单独打包css样式
    cssModules: {},
    // hotReload: !isDev,
  }
}