const webpack = require('webpack');
const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/App.js',
  output: {
    publicPath: 'dist/'
  },
  optimization: {
    splitChunks: {
      chunks: 'initial',
      name: true
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true
  },
  plugins: [
    new BundleTracker({ filename: './webpack-stats.json' }),
    new LodashModuleReplacementPlugin(),
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      title: 'Wiktor Płocki',
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['syntax-dynamic-import', 'lodash'],
          presets: ['env', 'react', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins() {
                  return [precss, autoprefixer];
                }
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[path][name]-[hash].[ext]'
          }
        }
      },
      {
        test: /\.(ttf|eof|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  }
};
