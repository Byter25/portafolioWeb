import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './articles/home/home.component';
import { CalculadoraComponent } from './articles/calculadora/calculadora.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { TaskListComponent } from "./articles/task-list/task-list.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'calculadora',component:CalculadoraComponent},
  {path:'tasklist',component:TaskListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
