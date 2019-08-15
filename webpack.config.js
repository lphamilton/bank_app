module.exports = {
    entry: __dirname + '/client/app.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader",
                options: { minimize: true }
              }
            ]
          },
          {

            test: /\.css/,
            use: [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
                  options: {
                    sourceMap: true,
                  }
              }
            ]
          },
        ]
      }
}
