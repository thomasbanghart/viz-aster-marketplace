var path = require("path");

const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

var webpackConfig = {
  mode: 'production',
  entry: {
    aster_plot: "./src/aster_plot_src.js",
  },
  output: {
    filename: "[name].js",
    path: __dirname,
    library: "[name]",
    libraryTarget: "umd"
  },
  plugins: [new UglifyJSPlugin()],
}

module.exports = webpackConfig;