const electron = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')

const { app, ipcMain, webContents, BrowserView } = electron

const BrowserWindow = electron.BrowserWindow

let mainWindow = null
let devtoolsView = null

const createWindow = () => {
  mainWindow = new BrowserWindow({
    frame: false,
    minWidth: 800,

    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
      contextIsolation: false
    }
  })

  mainWindow.setMenuBarVisibility(false)
  mainWindow.setMaximizable(true)

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3006'
      : `file://${path.join(__dirname, '../build/index.html')}`
  )

  isDev && mainWindow.webContents.openDevTools()

  ipcMain.on('whenDevtoolsResized', (_, data) => {
    if (!devtoolsView) {
      return
    }

    const { x, y, width, height } = data
    console.log(height)

    devtoolsView.setBounds({ x: x + 30, y, width: width - 30, height: 680 })
  })

  ipcMain.on('whenDevtoolsOpened', (_, data) => {
    const { webviewId, x, y, width, height } = data

    if (!webviewId) {
      return
    }

    const webview = webContents.fromId(webviewId)

    if (!webview) {
      return
    }

    devtoolsView = new BrowserView()
    mainWindow.setBrowserView(devtoolsView)
    devtoolsView.setBounds({ x: x + 30, y, width: width - 30, height })

    webview.setDevToolsWebContents(devtoolsView.webContents)
    webview.openDevTools()
  })

  ipcMain.on('whenScrolled', (_, data) => {
    const allWebContents = webContents.getAllWebContents()

    allWebContents.forEach((webContent) => {
      webContent.send('toScroll', data)
    })
  })

  ipcMain.on('syncWhenClicked', (_, data) => {
    const allWebContents = webContents.getAllWebContents()

    allWebContents.forEach((webContent) => {
      webContent.send('syncWhenClick', data)
    })
  })

  mainWindow.on('closed', () => (mainWindow = null))
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  process.platform !== 'darwin' && app.quit()
})

app.on('activate', () => {
  mainWindow === null && createWindow()
})
