import { join } from 'path'
import PublicFilesPlugin from '@modngn/plugin-public-files'

export default {
  modLanguage: '{{format}}',
  configFolder: join(__dirname, '../configs'),
  vanillaFolder: join(__dirname, './common/vanilla'),
  modsFolder: join(__dirname, '../mods'),
  datumExtensions: [ 'entity' ],
  plugins: [
    new PublicFilesPlugin({
      publicFolder: join(__dirname, './public'),
      publicKeys: [ 'client', 'resources' ]
    })
  ]
}
