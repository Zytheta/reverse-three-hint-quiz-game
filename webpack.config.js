const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js')
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Reverse Three Hint Quiz',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/template.html'),
      favicon: path.resolve(__dirname, 'images/icons8-quiz-32.png')
    })
  ],
  optimization: {
    runtimeChunk: 'single'
  }
}
