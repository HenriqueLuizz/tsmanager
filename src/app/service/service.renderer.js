const { ipcRenderer } = require("electron");

//Start Service
function startService (sendIp,serviceName) {

    ipcRenderer.send('start-service', sendIp, serviceName);
}

//Return Service Started
ipcRenderer.on('service-started', (event, serviceStarted) => {
    //Info servi�o parado
});

//Stop Service
function stopService (sendIp,serviceName) {

    ipcRenderer.send('start-service', sendIp, serviceName);
}

//Return Service Stopped
ipcRenderer.on('service-stopped', (event, serviceStopped) => {
    //Info servi�o parado
});

// Solicitar Servi�os Cadastrados
ipcRenderer.send('get-service', () => {
    //Enviar solicita��o de lista de servi�os
})
ipcRenderer.on('return-sevice', () => {
    //Receber o retorno do servi�o Prothues
});
// Cadastrar Servi�o
ipcRenderer.send('post-service', (ipService, NameService, typeService) => {
    //Enviar solicita��o de cadastro de servi�o
});
ipcRenderer.on('service-added', () => {
    //Receber info de adicionado
});

// Remover Servi�o
ipcRenderer.send('delete-service', (ipService, NameService, typeService) => {
    //Enviar solicita��o de exclu��o de servi�o
})
ipcRenderer.on('service-deleted', () => {
    //Receber info de deletado
});

module.exports = {sendService};