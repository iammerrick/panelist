var webpack = require('webpack');

var isProduction = process.env.NODE_ENV === 'production';

var configuration =  {
  entry: './src/main.js',
  output: {
    path: './built/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      },
      { test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions' }
    ]
  }
};

if (isProduction) {
  configuration.plugins = [new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })];
} else {
  configuration.devtool = 'inline-source-map';
}

module.exports = configuration;
