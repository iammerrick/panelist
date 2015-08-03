module.exports = {
  entry: './src/main.js',
  output: {
    path: './built/',
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  }
};
