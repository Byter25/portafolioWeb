import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TaskListComponent } from './components/task-list/task-list.component';

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
