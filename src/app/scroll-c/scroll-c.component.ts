import { Component } from '@angular/core';
import { Seccion } from "../seccion.interface";

@Component({
  selector: 'app-scroll-c',
  templateUrl: './scroll-c.component.html',
  styleUrls: ['./scroll-c.component.css']
})
export class ScrollCComponent {
  secciones:Seccion[] = [
    {id:1,
      titulo:"nombre",
      descripcion:"Esta es una descripcion",
      pie:"esta es el pie",
      visual:{video:"link123",img:"link345"}
    },
    {id:2,
      titulo:"nombre1",
      descripcion:"Esta es una segunda descripcion",
      pie:"esta es un segundo pie",
      visual:{video:"link13223",img:"link23345"}
    },
    {id:3,
      titulo:"FuncionaLawea",
      descripcion:"Esta es una segunda descripcion",
      pie:"esta es un segundo pie",
      visual:{video:"link13223",img:"link23345"}
    }
  ]
}
