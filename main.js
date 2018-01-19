const { app, BrowserWindow, ipcMain, Tray, Menu, globalShortcut  } = require('electron');
const { exec } = require('child_process');
const datafile = require('./datafile');
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
  win.webContents.openDevTools()
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
ipcMain.on('start-service', (event, sendIp, serviceName) => {
  
  let command = `sc \\\\${sendIp} start ${serviceName}`; //Command for start any service
    
  console.log(command);

  exec(command, (error, stdout, stderr) => {
  //exec('ping -n 2 localhost', (error, stdout, stderr) => { //Command for test
    if (error) {
      
      console.error(`exec error: ${error}`);
      //Fluxo de erro

      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);

    let content = { 
      date: new Date().toString(),
      user: process.env.USERNAME, 
      service: serviceName,
      action: 'Start'
    }

    console.log('Gravar o log: ' + content);

    //Gravar o log
    
    //data.createDataFile(__dirname + '/data/logstart.json', content);
    //datafile.addLog(__dirname + '\\data\\logstart.json', content);
    //let log = datafile.getDataFile(__dirname + '\\data\\logstart.json');

  });
})
ipcMain.on('stop-service', (event, sendIp, serviceName) => {
 
  let command = `sc \\\\${sendIp} stop ${serviceName}`; //Command for stop any service
  //let command = `taskkill /IM "${serviceName}" /F /T /S ${sendIp}`; //taskkill /IM "AppServer_SRV01.exe" /F /T /S localhost >nul
  
  console.log(command);

  exec(command, (error, stdout, stderr) => {
  //exec('ping -n 2 localhost', (error, stdout, stderr) => { //Command for test
    if (error) {
      console.error(`exec error: ${error}`);
      //Fluxo de erro
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);

    let content = { 
      date: new Date().toString(),
      user: process.env.USERNAME, 
      service: serviceName,
      action: 'Stop'
    }

    console.log('Gravar o log: ' + content);

    //Gravar o log

  });
})


//Retornar Finalizou Processo 

// Pegar estado da memória

// Pegar estado do Processador

// Pegar estado do processo (PID)

// Ping no IP

// Scan Port

// Entregar Log

// Entregar Serviço Cadastrado

// Cadastrar Serviço

// Remover Serviço

