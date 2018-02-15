import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  menus = [
    { 
      label: 'Dashboard', 
      link: './dashboard' 
    },
    { 
      label: 'Serviços', 
      subItems: [
        {
          label: 'Cadastrar',
          link: './service'
        },
        {
          label: 'Start/Stop',
          link: './serviceController'
        }
    ]},
    { 
      label: 'Util', 
      subItems: [
        {
          label: 'Ping',
          link: './pingTest'
        }
    ]}
  ];
}
