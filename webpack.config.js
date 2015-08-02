module.exports = {
  entry: './app/main.js',
  output: {
    path: '/public/',
    filename: 'main.js'
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
