import { resolve } from 'path'
import webpack from 'webpack'
import getPort from 'get-port'
import merge from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import common from './webpack.common'

export default async function () {
  const port = await getPort({ port: 8000 })
  return merge(common, {
    mode: 'development',
    devServer: {
      contentBase: resolve(__dirname, './client'),
      publicPath: `http://localhost:${port}`,
      compress: true,
      port: 8000,
      historyApiFallback: {
        index: 'index.html'
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve('client/index.html')
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    ]
  })
}
