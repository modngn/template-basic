import { join } from 'path'
import PublicFilesPlugin from '@modngn/plugin-public-files'

export default {
  modLanguage: 'yaml',
  configFolder: join(__dirname, '../configs'),
  vanillaFolder: join(__dirname, './common/datum'),
  modsFolder: join(__dirname, './public'),
  datumExtensions: [ 'entity' ],
  plugins: [
    new PublicFilesPlugin({
      publicFolder: join(__dirname, './public'),
      publicKeys: [ 'client', 'resources' ]
    })
  ]
}
