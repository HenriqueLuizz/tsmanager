import { Component, OnInit, Input } from '@angular/core';

import { ThfButtonModule } from '@totvs/thf-ui/components/thf-button';
import { ThfInfoModule } from '@totvs/thf-ui/components/thf-info';

import { TmsGridComponent } from '../tms-grid/tms-grid.component';

import { sendRequest } from 'selenium-webdriver/http';
//import { ipcRenderer } from 'electron';

declare var electron: any;

@Component({
  moduleId: module.id,
  selector: 'app-service',
  templateUrl: './service.component.html'
})

export class ServiceComponent implements OnInit {
  
  _id : String;
  @Input() name : String;
  @Input() ip : String;
  @Input() type : String;
  status : String;
  
  constructor() { }
  ngOnInit() {}
/*
  addService(ipService, serviceName){
    let HORARIO : string = '00:service00:00';
    let DATA : string = '10/01/2018';
    let USUARIO : string = 'MOCK';
    let log : string;

    log = `As ${HORARIO} de ${DATA}, O usuario ${USUARIO}, realizou a start dos servicos ${serviceName} em ${ipService}`;
    console.log(log);
    
    electron.ipcRenderer.send('add-service', serviceName, ipService );
  }

  removeService(ipService, serviceName){
    let HORARIO : string = '00:00:00'
    let DATA : string = '10/01/2018'
    let USUARIO : string = 'MOCK'
    let log : string;

    log = `As ${HORARIO} de ${DATA}, O usuario ${USUARIO}, removeu o servico ${serviceName} em ${ipService}`;
    console.log(log);
    
    electron.ipcRenderer.send('remove-service', serviceName, ipService );

  }

  updateServive(ipService, serviceName){
    let HORARIO : string = '00:00:00'
    let DATA : string = '10/01/2018'
    let USUARIO : string = 'MOCK'
    let log : string;

    log = `As ${HORARIO} de ${DATA}, O usuario ${USUARIO}, atualizou o servico ${serviceName} em ${ipService}`;
    console.log(log);
    
    electron.ipcRenderer.send('update-service', serviceName, ipService );
  }
  ngOnInit() { 
    electron.ipcRenderer.on('service-started', () =>{
      console.log('serviço inicializado');
      this.status = "Iniciado";
    })

    electron.ipcRenderer.on('service-stopped', () =>{
      console.log('serviço parado');
      this.status = "Parado";
    })
  }
*/
}
