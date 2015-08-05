var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer-core');
var srcPath = path.resolve(__dirname, 'src');
var bowerPath = path.resolve(__dirname, 'bower_components');

module.exports = {
  entry: {
    app: './public/index.js'
  },
  output: {
    path: 'public',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
    root: [bowerPath],
    alias: {
      src: srcPath,
      sass: path.resolve(srcPath, 'sass')
    }
  },
  devtool: 'source-map',
  module: {
    noParse: [/bower_components/],
    loaders: [{
      test: /\.ts$/,
      loader: 'ts-loader'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass!postcss-loader?outputStyle=expanded'
    }]
  },
  externals: {
    phaser: 'Phaser'
  },
  plugins: [
    new webpack.ResolverPlugin(new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main']))
  ],
  postcss: function () {
    return [autoprefixer()];
  }
};
