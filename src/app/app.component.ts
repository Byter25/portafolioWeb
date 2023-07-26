import { Component, QueryList, ElementRef, AfterViewInit, ViewChildren } from '@angular/core';
import {backdrop } from './menu/menu.component';
import { elemento } from './seccion-skills/seccion-skills.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit{
  
  ngAfterViewInit(): void {
    if(window.innerWidth >= 860){
      backdrop()
    }
    elemento()
  }

  bajar(){
    console.log("preciono el boton alv")
  }
}