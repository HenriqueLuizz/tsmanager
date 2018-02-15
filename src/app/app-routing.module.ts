import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceComponent } from './service/service.component';
import { ServiceControllerComponent } from './service-controller/service-controller.component';
import { PingtestComponent } from './pingtest/pingtest.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'addService', component: DashboardComponent},
  {path: 'serviceController', component: ServiceControllerComponent},
  {path: 'pingtest', component: PingtestComponent},
  {path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}