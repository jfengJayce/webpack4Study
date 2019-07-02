module.exports = {
  entry: {
    app: './app.js'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // use: 'babel-loader',
        use: {
          loader: 'babel-loader'
          // options: {
          //   presets: [
          //     ['@babel/preset-env', {
          //       targets: {
          //         browsers: ['>1%', 'last 2 versions']
          //       }
          //     }]
          //   ]
          // }
        },
        exclude: '/node_modules/'
      }
    ]
  }
}