const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ["@babel/polyfill", path.resolve(__dirname, "src/index")],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9000,
    proxy: { '/api/**': { target: 'http://localhost:3001', secure: false } }
  },
  devtool: 'inline-source-map',
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: './index.html'
    })
  ],
  stats: "minimal"
};