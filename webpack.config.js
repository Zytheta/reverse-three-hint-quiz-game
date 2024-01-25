const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js')
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Reverse Three Hint Quiz'
    })
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  }
  //   optimization: {
  //     runTimeChunk: 'single'
  //   }
}
