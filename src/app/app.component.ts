import { Component } from '@angular/core';
import {backdrop } from './menu/menu.component';
import { elemento } from './seccion-skills/seccion-skills.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

}
document.addEventListener("DOMContentLoaded", function() {
  backdrop();
  elemento();
});
// Obtener el elemento que quieres observar
