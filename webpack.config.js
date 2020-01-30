const  path = require('path') 
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const babelOption = require('./babel.config.js')
// const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  // mode: process.env.NODE_ENV,
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    publicPath: 'dist',
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  plugins:[
    // new UglifyJSPlugin(),
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // new BundleAnalyzerPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('production')
    // })
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common' // 指定公共 bundle 的名称。
    // })
  ],
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']
      },
      {
        test: /\.js|x$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: babelOption
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      // minRemainingSize: 0,
      maxSize: 50000,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '_',
      automaticNameMaxLength: 30,
      cacheGroups: {
        node_modules: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}