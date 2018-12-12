const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  plugins: [new HTMLPlugin(), new ForkTsCheckerWebpackPlugin()],
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: [{ loader: 'babel-loader' }]
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              camelCase: 'dashesOnly'
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.ts', '.tsx']
  }
}
