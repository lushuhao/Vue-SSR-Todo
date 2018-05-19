const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 最后引入到文件中
          'css-loader', // 再执行
          'sass-loader' // 先执行，转成css
        ]
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[name]-url.[ext]'
            }
          }
        ]

      }
    ]
  }
}