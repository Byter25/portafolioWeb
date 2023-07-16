import { Component } from '@angular/core';
import { Skills } from "../seccion.interface";


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
    {id:5,skill:"mainkera",progreso:"90%"}
  ]

  profesional:Skills[] =[
    {id:1,skill:"trabajo en equipo",progreso:"90%"},
    {id:2,skill:"makako",progreso:"65%"},
    {id:3,skill:"python",progreso:"75%"},
    {id:4,skill:"java",progreso:"70%"},
  ]
}

export function elemento(){
  const element = document.querySelector(".barra") as HTMLElement
  const barras = document.querySelectorAll(".progreso")
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        barras.forEach((barra) => {
          barra.classList.add("anima")
        })
        console.log("hola")
      }else{
        barras.forEach((barra) => {
          barra.classList.remove("anima")
        })
        console.log("chao")
      }
    });
  });
  
  // Inicia la observación del elemento objetivo
  observer.observe(element);
}