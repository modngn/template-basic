import { resolve } from 'path'
import AddressLoaderPlugin from '@modngn/plugin-address-loader'
import PublicFilesPlugin from '@modngn/plugin-public-files'

const modLanguage = '{{format}}'
const isDev = process.env.NODE_ENV === 'development'
const root = isDev ? __dirname : process.cwd()
const vanillaFolder = isDev ? resolve('./common/vanilla') : resolve('/snapshot/engine/common/vanilla')
const modsFolder = isDev ? resolve(root, '../mods') : resolve(root, 'mods')
const configFolder = isDev ? resolve(root, '../configs') : resolve(root, 'configs')
const publicFolder = resolve(root, './public')

export default {
  modLanguage,
  vanillaFolder,
  modsFolder,
  configFolder,
  publicFolder,
  plugins: [
    new AddressLoaderPlugin(),
    new PublicFilesPlugin()
  ]
}
