const HtmlWebpackPlugin          = require('html-webpack-plugin');
const MiniCssExtractPlugin       = require('mini-css-extract-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const CopyPlugin                 = require("copy-webpack-plugin");

const env = process.env.NODE_ENV;

module.exports = {
  mode: process.env.NODE_ENV,

  entry: './src/js/main.js',

  output: {
    publicPath: '/',
    filename: env === 'development' ? 'js/bundle.js' : 'js/bundle.[contenthash].min.js',
    chunkFilename: env === 'development' ? 'js/[name].js' : 'js/[name].[contenthash].min.js'
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor'
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          env === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 2, sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { implementation: require('sass'), sourceMap: true } },
        ]
      },
    ],
  },

  plugins: [
    new WebpackBuildNotifierPlugin(),

    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].min.css'
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/html/index.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'privacy.html',
      template: 'src/html/privacy.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'imprint.html',
      template: 'src/html/imprint.html'
    }),

    new CopyPlugin({
      patterns: [
        {from: 'src/assets/videos', to: 'assets/videos'},
        {from: 'src/assets/images', to: 'assets/images'},
      ]
    }),
  ],
}
