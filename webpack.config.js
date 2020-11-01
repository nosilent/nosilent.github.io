const  path = require('path') 
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const babelOption = require('./babel.config.js')
// const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
// const webpack = require('webpack')
// const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
  // mode: process.env.NODE_ENV=='production'?'production':'development',
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
    // new CompressionPlugin({
    //   test: /\.js/,
    //   algorithm: 'gzip',
    //   filename: '[path].gz[query]',
    //   threshold: 0,
    //   minRatio: 1,
    //   deleteOriginalAssets: true
    // })
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
        use: [ 'style-loader', 'css-loader','postcss-loader']
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
    // alias:{
    //   '@ant-design/icons/dist.js$': path.resolve(__dirname, '')
    // }
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
  },
  // externals : ['react','react-dom','react-router-dom','axios','marked']
}