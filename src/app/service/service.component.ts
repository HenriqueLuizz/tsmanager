import { Component, OnInit } from '@angular/core';
import { ThfButtonModule } from '@totvs/thf-ui/components/thf-button';
import { ThfInfoModule } from '@totvs/thf-ui/components/thf-info';
import { sendRequest } from 'selenium-webdriver/http';
//import { ipcRenderer } from 'electron';
//import { sendService } from './service.renderer';
//const sendService = require('./service.renderer');
declare var electron: any;
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor() { }

  tstButton(ipService, serviceName){
    let HORARIO = '00:00:00'
    let DATA = '10/01/2018'
    let USUARIO = 'MOCK'

    console.log('As '+ HORARIO +' de '+DATA+', O usuario '+USUARIO+', realizou a start dos servicos '+serviceName+' em '+ ipService);
    
    electron.ipcRenderer.send('start-service', serviceName, ipService );
  }

  ngOnInit() { }

}
