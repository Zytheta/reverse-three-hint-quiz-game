const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "dist"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.json$/i,
        type: "asset/source",
        include: path.resolve(__dirname, "src"),
        generator: {
          filename: "[name][ext]",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/inline",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Reverse Three Hint Quiz",
      name: "index.html",
      template: path.resolve(__dirname, "src/template.html"),
      favicon: path.resolve(__dirname, "dist/icons8-quiz-32.png"),
    }),
  ],
  optimization: {
    runtimeChunk: "single",
  },
};
