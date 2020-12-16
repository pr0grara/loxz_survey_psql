const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ["@babel/polyfill", path.resolve(__dirname, "frontend/src/index.js")],
  output: {
    path: path.resolve(__dirname, "frontend", "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpg)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            }
          },
        ],
        type: 'javascript/auto'
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 3000,
    proxy: { "/api/**": { target: "http://localhost:9000", secure: false } },
  },
  devtool: "inline-source-map",
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "frontend", "public", "index.html"),
      filename: "./index.html",
    }),
  ],
  node: {
    child_process: "empty",
    fs: "empty", // if unable to resolve "fs"
  },
  // stats: "minimal"
};