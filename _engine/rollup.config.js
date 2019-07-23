import autoExternal from 'rollup-plugin-auto-external'
import resolve from 'rollup-plugin-node-resolve'
import copy from 'rollup-plugin-copy'
import json from 'rollup-plugin-json'

export default {
  input: './server/Server.js',
  output: {
    file: './builds/server/index.js',
    format: 'cjs'
  },
  plugins: [
    autoExternal(),
    resolve(),
    json(),
    copy({
      targets: [
        { src: './common/vanilla/**', dest: './builds/server/common/vanilla' }
      ]
    })
  ]
}
