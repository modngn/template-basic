/* eslint-env browser */
import ModNGN from '@modngn/client'
import modngnConfig from '../modngn.client.config'

// React is added through unpkg so it can be easily removed
// from index.html.
const React = window.React
const ReactDOM = window.ReactDOM
const ReactJSON = window.reactJsonView.default

export default class Client {
  constructor (url = 'http://localhost', port = 8080) {
    this.modngn = new ModNGN(url, port)
  }

  async start () {
    try {
      // Load ModNGN data
      await this.modngn.load()
      // Create app
      this.app = React.createElement(ReactJSON, {
        src: this.modngn.__config,
        enableClipboard: false,
        theme: 'monokai'
      }, null)
      // Render the app
      ReactDOM.render(this.app, document.getElementById('root'))
      // Start ModNGN
      await this.modngn.start(modngnConfig)
    } catch (err) {
      throw err
    }
  }
}
