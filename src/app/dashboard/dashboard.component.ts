import { Component, OnInit } from '@angular/core';
import { ThfButtonModule } from '@totvs/thf-web/components/thf-button';
import { ThfInfoModule } from '@totvs/thf-web/components/thf-info';
import { sendRequest } from 'selenium-webdriver/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
