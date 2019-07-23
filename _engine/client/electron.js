const { resolve } = require('path')
const electron = require('electron')

// Electron window
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow = null

const WINDOW_CONFIG = {
  width: 1920,
  height: 1080,
  webPreferences: {
    webSecurity: false // For accessing local file
  }
}

function createWindow () {
  mainWindow = new BrowserWindow(WINDOW_CONFIG)
  mainWindow.loadURL(`file://${resolve(__dirname, '../builds/client/index.html')}`)
  mainWindow.on('closed', () => { mainWindow = null })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
