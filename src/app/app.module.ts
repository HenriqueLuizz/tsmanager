import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThfModule } from '@totvs/thf-ui';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { PingtestComponent } from './pingtest/pingtest.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    PingtestComponent,
    DashboardComponent,
    ServiceComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ThfModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
