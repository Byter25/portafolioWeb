import { Component } from '@angular/core';
import { Intereses } from '../../../core/models/seccion.interface';
import { NgFor } from '@angular/common';
import { SeccionMaxComponent } from 'src/app/shared/components/seccion-max.component';
@Component({
    selector: 'app-seccion-me',
    templateUrl: './seccion-me.component.html',
    standalone: true,
    imports: [NgFor,SeccionMaxComponent],
})
export class SeccionMeComponent {
  agrandarCaja() {
    const btnAgrandar = document.getElementById(
      'btnAgrandar'
    ) as HTMLButtonElement;
    const texto = document.querySelector(
      '.reziceCaja p'
    ) as HTMLParagraphElement;
    texto.style.maxHeight = 'none';
    btnAgrandar.style.display = 'none';
  }
}
