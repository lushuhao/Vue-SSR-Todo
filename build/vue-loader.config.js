module.exports = (isDev) => {
  return {
    preserveWhitepace: true, // 去除template中的空格
    extractCSS: !isDev, // 单独打包css样式
    cssModules: {
      localIdentName: isDev ? '[path][name]-[local]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    },
    // hotReload: !isDev,
  }
}