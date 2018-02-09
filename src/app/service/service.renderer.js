const { ipcRenderer } = require("electron");

//Start Service
function startService (sendIp,serviceName) {

    ipcRenderer.send('start-service', sendIp, serviceName);
}

//Return Service Started
ipcRenderer.on('service-started', (event, serviceStarted) => {
    //Info serviço parado
});

//Stop Service
function stopService (sendIp,serviceName) {

    ipcRenderer.send('start-service', sendIp, serviceName);
}

//Return Service Stopped
ipcRenderer.on('service-stopped', (event, serviceStopped) => {
    //Info serviço parado
});

// Solicitar Serviços Cadastrados
ipcRenderer.send('get-service', () => {
    //Enviar solicitação de lista de serviços
})
ipcRenderer.on('return-sevice', () => {
    //Receber o retorno do serviço Prothues
});
// Cadastrar Serviço
ipcRenderer.send('post-service', (ipService, NameService, typeService) => {
    //Enviar solicitação de cadastro de serviço
});
ipcRenderer.on('service-added', () => {
    //Receber info de adicionado
});

// Remover Serviço
ipcRenderer.send('delete-service', (ipService, NameService, typeService) => {
    //Enviar solicitação de exclução de serviço
})
ipcRenderer.on('service-deleted', () => {
    //Receber info de deletado
});

module.exports = {sendService};