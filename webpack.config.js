const path = require ("path")
const webpack = require('webpack')

module.exports = {
  devtool: "source-map",
  entry: [
    'regenerator-runtime/runtime',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.resolve (__dirname, "src", "index.jsx"),
  ],
  output: {
    path: path.resolve (__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ["babel-loader", "eslint-loader?fix=true"],
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    inline: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
        modules: [
      "node_modules",
      path.resolve (__dirname, "src"),
    ],

  }
}
