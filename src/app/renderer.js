const { ipcRenderer } = require('electron');
//const data = require('../../data');

let ipTest = document.querySelector('#ipTest');
let btnStartServer = document.querySelector('#btnStartService');
let btnStopServer = document.querySelector('#btnStopService');
let txtResult = document.querySelector('#resultPing');
//let curso = document.querySelector('.curso');
//let botaoAdicionar = document.querySelector('.botao-adicionar');
//let campoAdicionar = document.querySelector('.campo-adicionar');

//Adicionar Servico
btnAddService.addEventListener('click' ,(serviceName, ipService) => {
    if(serviceName.value == '' || ipcRenderer.value == ''){
        console.log('Nome do Serviço ou IP em branco');
        return 
    }
    let sendIp = ipTest.value;
    ipcRenderer.send('add-service', sendIp);
});

//Retorno do Adicionar Servico
ipcRenderer.on('service-add', (event, result) => {
    console.log(`Serviço foi adicionado! /n`+ result);
});
//****************************************************** */

//Remover Servico
btnDelService.addEventListener('click' ,(serviceName, ipService) => {
    if(serviceName.value == '' || ipcRenderer.value == ''){
        console.log('Nome do Serviço ou IP em branco');
        return 
    }
    let sendIp = ipTest.value;
    ipcRenderer.send('del-service', sendIp);
});

//Retorno do Adicionar Servico
ipcRenderer.on('service-del', (event, result) => {
    console.log(`Serviço foi deletado! /n`+ result);
});
//****************************************************** */

//Start do Servico
btnStartService.addEventListener('click' ,(serviceName, ipService) => {
    if(serviceName.value == '' || ipcRenderer.value == ''){
        console.log('Não é possí­vel realizar o teste, informe o IP');
        return 
    }
    let sendIp = ipTest.value;
    ipcRenderer.send('start-service', sendIp);
});

//Retorno do Start do Servico
ipcRenderer.on('service-started', (event, result) => {
    console.log(`Serviço foi iniciado! /n`+ result);
});
//****************************************************** */

//Stop do Servico
btnStopService.addEventListener('click' ,(serviceName, ipService) => {
    if(serviceName.value == '' || ipService.value == ''){
        console.log('Informe um Server e/ou IP');
        return 
    }
    ipcRenderer.send('start-service', serviceName.value, ipService.value);
});

//Resultado Stop do Servico
ipcRenderer.on('service-stopped', (event, result) => {
    console.log(`Serviço foi parado! /n`+ result);
});

//****************************************************** */
