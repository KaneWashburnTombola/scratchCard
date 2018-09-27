const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    "main": './main.ts',
    "polyfills": ["core-js/es6/object", "core-js/es6/function", "core-js/es6/array", "core-js/es6/string", "core-js/es6/number", "core-js/es6/promise"]
  },
  devServer: {
    contentBase: path.resolve(__dirname, '.'),
    hot: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  mode: 'production',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};