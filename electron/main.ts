import { app, BrowserWindow, nativeImage } from 'electron'
import * as path from 'path'
import * as url from 'url'

let mainWindow: Electron.BrowserWindow | null

function createWindow () {
  const icon = nativeImage.createFromPath(`${app.getAppPath()}/build/icon.png`)

  mainWindow = new BrowserWindow({
    icon,
    width: 1100,
    height: 700,
    backgroundColor: '#ffffff',
    frame: false,
    transparent: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:4000')
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'renderer/index.html'),
        protocol: 'file:',
        slashes: true
      })
    )
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', () => {
  createWindow()
})

app.allowRendererProcessReuse = true
