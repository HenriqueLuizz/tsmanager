import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  menus = [
    { label: 'Dashboard', link: './dashboard' },
    { label: 'Start/Stop Serviço', link: './service' },
    { label: 'Ping Test', link: './pingtest' }
  ];
}
