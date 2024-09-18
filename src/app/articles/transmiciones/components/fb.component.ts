import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'transmiciones',
  imports: [RouterLink, RouterOutlet],
  template: `

  `,
  styles: ``,
  standalone: true,
})
export class FbStreamComponent implements OnInit {

  ngOnInit(): void {
    // Verifica el estado del stream al iniciar el componente

  }
}
