const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug'
    }),
  ],

  module: {
    rules: [
      { 
        test: /\.pug$/i,
        use: ['pug-loader']
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },

  entry: {
    app: './src/app.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js",
  },

  devServer: {
    port: 3000,
  }
})
