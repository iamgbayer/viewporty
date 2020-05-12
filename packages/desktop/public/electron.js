const electron = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')
const {
  default: installExtension,
  REDUX_DEVTOOLS
} = require('electron-devtools-installer')

const { app, ipcMain, webContents } = electron

const BrowserWindow = electron.BrowserWindow

let main

const createWindow = () => {
  installExtension(REDUX_DEVTOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err))

  main = new BrowserWindow({
    width: 900,
    height: 680,
    frame: false,
    minWidth: 800,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
      contextIsolation: false
    }
  })

  main.setMenuBarVisibility(false)

  main.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  )

  isDev && main.webContents.openDevTools()

  ipcMain.on('whenScrolled', (_, data) => {
    const allWebContents = webContents.getAllWebContents()

    allWebContents.forEach((webContent) => {
      webContent.send('toScroll', data)
    })
  })

  ipcMain.on('whenClicked', (_, data) => {
    const allWebContents = webContents.getAllWebContents()

    allWebContents.forEach((webContent) => {
      webContent.send('toClick', data)
    })
  })

  main.on('closed', () => (main = null))
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  process.platform !== 'darwin' && app.quit()
})

app.on('activate', () => {
  main === null && createWindow()
})
