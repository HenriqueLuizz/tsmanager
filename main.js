const { app, BrowserWindow, ipcMain, Tray, Menu, globalShortcut  } = require('electron')
//const data = require('./data');
//const templateGenerator = require('./app/template');

let win;
function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1660, 
    height: 1024,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/assets/logo.png`
  })
  win.loadURL(`file://${__dirname}/dist/index.html`)
  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()
  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
}
// Create window on electron intialization
app.on('ready', createWindow)
// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})

/*
ipcMain.on('curso-parado', (event, curso, tempoEstudado) => {
    data.salvaDados(curso, tempoEstudado);
    console.log(`O curso ${curso} foi estudado por ${tempoEstudado}`);
});
*/
ipcMain.on('ping-test', (event, sendIp) => {    
    console.log(sendIp);
})
