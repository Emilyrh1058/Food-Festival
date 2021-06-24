const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: './assets/js/script.js',  // root of the bundle, beginning of dependency
  output: {                        // takes entry point, bundles it, then outputs it into a specified folder
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static", // the report outputs to an HTML file in the dist folder
  })
  ],
  mode: 'development'     // https://webpack.js.org/configuration/mode/
};
