const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const zlib = require('zlib');
const webpack = require('webpack');

const SRC_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({ //<--key to reduce React's size
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
    }),
    new CompressionPlugin({
      // filename: '[path].br[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      // compressionOptions: {
      //   // zlib’s `level` option matches Brotli’s `BROTLI_PARAM_QUALITY` option.
      //   level: 11,
      // },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    }),
  ],
};
