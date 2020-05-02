const electron = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')

const store = require('./store')

const { app, ipcMain, webContents } = electron

const BrowserWindow = electron.BrowserWindow

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
      contextIsolation: false
    }
  })

  mainWindow.setMenuBarVisibility(false)

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  )

  isDev && mainWindow.webContents.openDevTools()

  ipcMain.on('whenScrolled', (_, data) => {
    const allWebContents = webContents.getAllWebContents()

    allWebContents.forEach((webContent) => {
      webContent.send('toScroll', data)
    })
  })

  ipcMain.on('whenClicked', (_, data) => {
    const allWebContents = webContents.getAllWebContents()

    console.log(data)

    allWebContents.forEach((webContent) => {
      webContent.send('toClick', data)
    })
  })

  // webContents.insertCSS()

  mainWindow.on('closed', () => (mainWindow = null))
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  process.platform !== 'darwin' && app.quit()
})

app.on('activate', () => {
  mainWindow === null && createWindow()
})
