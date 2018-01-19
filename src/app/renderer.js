const { ipcRenderer } = require('electron');
//const data = require('../../data');

let ipTest = document.querySelector('#ipTest');
let btnPingTest = document.querySelector('#btnPingTest');
let txtResult = document.querySelector('#resultPing');
//let curso = document.querySelector('.curso');
//let botaoAdicionar = document.querySelector('.botao-adicionar');
//let campoAdicionar = document.querySelector('.campo-adicionar');


btnPingTest.addEventListener('click' ,() => {
    if(sendIp == ''){
        console.log('Não é possível realizar o teste, informe o IP');
        return 
    }
    let sendIp = ipTest.value;
    ipcRenderer.send('ping-test', sendIp);
});

ipcRenderer.on('result-ping-test', (event, result) => {
    console.log(result);
    //curso.textContent = result[0];
});
