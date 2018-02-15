import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';

import { ThfModule } from '@totvs/thf-ui';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { PingtestComponent } from './pingtest/pingtest.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceControllerComponent } from './service-controller/service-controller.component';
import { TmsGridComponent } from './tms-grid/tms-grid.component';
import { ServiceModule } from './service/service.module';
import { PainelModule } from './painel/painel.module';

@NgModule({
  declarations: [
    AppComponent,
    PingtestComponent,
    DashboardComponent,
    ServiceControllerComponent,
    TmsGridComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ThfModule,
    HttpModule,
    ServiceModule,
    PainelModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
