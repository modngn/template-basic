import ModNGN from '@modngn/server'
import modngnConfig from '../modngn.server.config'

class Server {
  constructor () {
    this.modngn = new ModNGN(modngnConfig)
    this.start()
  }

  async start () {
    try {
      await this.modngn.loadMods()
      await this.modngn.start({
        'x-custom-header': 'a custom value'
      })
    } catch (err) {
      throw err
    }
  }
}

export default new Server()
