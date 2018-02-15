import { Component, OnInit } from '@angular/core';
import { ThfButtonModule } from '@totvs/thf-ui/components/thf-button';
import { ThfInfoModule } from '@totvs/thf-ui/components/thf-info';

import { ServiceService } from '../service/service.service';
import { ServiceComponent } from '../service/service.component';
import { PainelComponent } from '../painel/painel.component';

declare var electron: any;

@Component({
  moduleId: module.id,
  selector: 'app-service-controller',
  templateUrl: './service-controller.component.html',
  styleUrls: ['./service-controller.component.css']
})
export class ServiceControllerComponent implements OnInit {

  services: ServiceComponent[] = [];
  serviceDao: ServiceService;
  mensagem: string = '';
  
  constructor(serviceDao: ServiceService) {
        
    this.serviceDao = serviceDao;
    serviceDao
    .lista()
    .subscribe( services => {
        this.services = services;
    }, err => console.log(err))
}

remove(service: ServiceComponent, painel: PainelComponent) {
  this.serviceDao.remove(service)
  .subscribe(
      () => {

          painel.faceOut(() =>{

              let newServices = this.services.slice(0);
              let indice = newServices.indexOf(service);
              newServices.splice(indice, 1);
              this.services = newServices;
              this.mensagem = 'Serviço removido com sucesso!';
          });
      },
      err => {
          this.mensagem = 'Serviço removido com sucesso!';
          console.log(err);
      }
  );
}

  startService(ipService, serviceName){
    let HORARIO : string = '00:00:00'
    let DATA : string = '10/01/2018'
    let USUARIO : string = 'MOCK'
    let log : string;

    log = `As ${HORARIO} de ${DATA}, O usuario ${USUARIO}, iniciou o servico ${serviceName} em ${ipService}`;
    console.log(log);
    
    electron.ipcRenderer.send('start-service', serviceName, ipService );
  }

  stopService(ipService, serviceName){
    let HORARIO : string = '00:00:00'
    let DATA : string = '10/01/2018'
    let USUARIO : string = 'MOCK'
    let log : string;

    log = `As ${HORARIO} de ${DATA}, O usuario ${USUARIO}, parou o servico ${serviceName} em ${ipService}`;
    console.log(log);
    
    electron.ipcRenderer.send('stop-service', serviceName, ipService );
  }

  ngOnInit() {
    electron.ipcRenderer.on('service-started', () =>{
      console.log('serviço inicializado');
    })

    electron.ipcRenderer.on('service-stopped', () =>{
      console.log('serviço parado');
    })
  }

}
