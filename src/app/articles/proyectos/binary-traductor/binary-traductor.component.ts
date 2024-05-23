import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binary-traductor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './binary-traductor.component.html',
  styleUrl: './binary-traductor.component.css',
})
export class BinaryTraductorComponent {
  texto: string = '';
  binario: string = '';

  constructor() {}

  translateToBinary(): void {
    this.binario = this.texto
      .split('')
      .map((char) => {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
      })
      .join(' ');
  }
}
