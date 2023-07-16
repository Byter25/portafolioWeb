import { Component } from '@angular/core';
import { Skills } from "../seccion.interface";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-seccion-skills',
  templateUrl: './seccion-skills.component.html',
  styleUrls: ['./seccion-skills.component.css','../seccion-start/seccion-start.component.css','../scroll-c/scroll-c.component.css']
})
export class SeccionSkillsComponent {

  tecnicas:Skills[] =[
    {id:1,skill:"html-css",progreso:"80%"},
    {id:2,skill:"javascript",progreso:"70%"},
    {id:3,skill:"python",progreso:"75%"},
    {id:4,skill:"java",progreso:"60%"},
  ]

  profesional:Skills[] =[
    {id:1,skill:"trabajo en equipo",progreso:"90%"},
    {id:2,skill:"makako",progreso:"65%"},
    {id:3,skill:"python",progreso:"75%"},
    {id:4,skill:"java",progreso:"70%"},
  ]

}
