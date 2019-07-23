import { resolve } from 'path'
import { version } from './package.json'

export default {
  entry: './client/index.js',
  output: {
    path: resolve(__dirname, 'builds/client'),
    filename: 'app-v' + version + '.js'
  }
}
