const devMode = (process.env.NODE_ENV === 'development');
const path = require('path');

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    pathinfo: devMode,
    path: path.resolve(__dirname, 'dist'),
    filename: devMode ? 'js/bundle.js' : 'js/[name].[contenthash:8].js'
  },
  optimization: {
    minimize: !devMode,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2
          },
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true
          },
          parallel: true,
          cache: true,
          sourceMap: devMode
        }
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          parser: safePostCssParser,
          map: (devMode ? {
            inline: false,
            annotation: true
          } : false)
        }
      })
    ]
  },
  resolve: {
    extensions: ['.js','.jsx']
  },
  module: {
    strictExportPresence: true,
    rules: [
      // step 1: lint
      {
        test: /\.(js|mjs|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        }
      },
      // step 2: process js/jsx via babel
      {
        test: /\.(js|mjs|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // step 3: process Sass via sass-loader
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: devMode,
              modules: true,
              sourceMap: devMode
            }
          },
          'css-loader',
          'sass-loader'
        ],
      },
      // step 4: handle image files via file-loader
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/img/[name].[hash:8].[ext]'
            },
          },
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, 'src/public'), to: 'assets' }
    ]),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    devMode && new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css'
    })
  ]
};