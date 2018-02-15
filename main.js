const { app, BrowserWindow, ipcMain, Tray, Menu, globalShortcut  } = require('electron');
const { exec } = require('child_process');
const datafile = require('./datafile');
const os = require('os');

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
  
  const osType = os.type() //Get Operative System Name
  let command;

  if(osType == 'Linux' || osType == 'Darwin'){
    command = `service ${serviceName} start`;
  }else{
    command = `sc \\\\${sendIp} start ${serviceName}`; //Command for start any service
  }

  console.log(command);

  //exec(command, (error, stdout, stderr) => {
  exec('ping -c 2 localhost', (error, stdout, stderr) => { //Command for test
    if (error) {
      
      console.error(`exec error: ${error}`);
      //Gravar o erro
      return;
    }
    // console.log(`stdout: ${stdout}`);
    // console.log(`stderr: ${stderr}`);

    let content = { 
      date: new Date().toString(),
      user: process.env.USERNAME, 
      service: serviceName,
      action: 'Start'
    }
    //Gravar Log
    console.log('Gravar o log: ' + content);
    
    //Enviar resposta que foi iniciado o servi�o
    win.send('service-started');
  });
})
ipcMain.on('stop-service', (event, sendIp, serviceName) => {
  const osType = os.type() //Get Operative System Name
  let command;

  if(osType == 'Linux' || osType == 'Darwin'){
    command = `service ${serviceName} stop`;
  }else{
    command = `sc \\\\${sendIp} stop ${serviceName}`; //Command for start any service
  }

  console.log(command);

  //exec(command, (error, stdout, stderr) => {
  exec('ping -c 2 localhost', (error, stdout, stderr) => { //Command for test
    if (error) {
      console.error(`exec error: ${error}`);
      //Fluxo de erro
      return;
    }
    // console.log(`stdout: ${stdout}`);
    // console.log(`stderr: ${stderr}`);

    let content = { 
      date: new Date().toString(),
      user: process.env.USERNAME, 
      service: serviceName,
      action: 'Stop'
    }
    //Gravar o log
    console.log('Gravar o log: ' + content);

    //Enviar resposta que foi parado o servi�o
    win.send('service-stopped');
  });
})

// Entregar Servi�o Cadastrado
ipcMain.on('get-service', () => {

  //Get dos servi�os cadastrados
  //Gravar o log
  //Enviar resposta - lista de servi�os cadastrados
  win.send('service-stopped');
})

// Cadastrar Servi�o
ipcMain.on('post-service', (event, ipService, NameService, typeService) => {

  //Post de servi�o
  //Gravar o log
  //Enviar resposta service�o cadastrado
  win.send('service-added');

})

// Remover Servi�o
ipcMain.on('delete-service', (event, ipService, NameService, typeService) => {

  //Post de servi�o
  //Gravar o log
  //Enviar resposta service�o cadastrado
  win.send('service-deleted');
  
})

// Entregar Log

// Ping no IP

// Pegar estado da mem�ria

// Pegar estado do Processador

// Pegar estado do processo (PID)

// Scan Port
