const path = require('path')
const webpack = require('webpack')
const htmlPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  target: "web",
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
  },
  plugins: [
    new webpack.DefinePlugin({ // 定义全局变量，打包时可以访问
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new htmlPlugin()
  ]
}

if (isDev) {
  config.devtool = '#cheap-module-eval-source-map'
  config.devServer = {
    port: 8888,
    host: '0.0.0.0', // 可以通过127.0.0.1, 或者本机IP访问，局域网下也可以访问，localhost就不容易做得到
    overlay: {
      error: true // 编译产生错误显示到网页上
    },
    hot: true,
    clientLogLevel: 'warning'
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
}

module.exports = config;