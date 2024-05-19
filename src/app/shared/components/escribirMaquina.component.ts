import { NgStyle } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'escribir-maquina',
  imports: [NgStyle],
  template: `
    <!--ESCRITURA AUTOMATICA-->
    <div
      [ngStyle]="{ width: longitudNomLargo + 5 + 'ch' }"
      class="flex items-center h-full uppercase font-mono"
    >
      <p>{{ text.substring(0, index) }}<span class="animate-ping">|</span></p>
    </div>
  `,
  styles: [
    `
      .animate-typing {
        animation: typing 3s 1s infinite;
      }

      @keyframes typing {
        from {
          width: 0;
        }
      }
    `,
  ],
  standalone: true,
})
export class EscribirMaquinaComponent implements OnInit, AfterViewInit {
  @Input() textos: string[] = []; //textos desde el padre

  text = 'ByteDev'; // El texto que se va a mostrar
  index = 0; // El índice de la letra actual
  state = 'tipiar'; // El estado del efecto: tipiar o borrar
  interval = 100; // El intervalo de tiempo entre cada letra
  textIndex = 0; //indice del texto actual
  waitTime = 1000; // El tiempo que se debe esperar antes de borrar el texto
  timePassed = 5000; // El tiempo que ha pasado desde que se terminó de tipiar el texto

  longitudNomLargo: number = 0;
  nombreLargo: string = '';

  ngOnInit(): void {
    this.nombreLargo = this.textos.reduce(
      (a, b) => (a.length > b.length ? a : b),
      ''
    );
    this.longitudNomLargo = this.nombreLargo.length;
  }
  ngAfterViewInit(): void {
    setInterval(() => this.animar(), this.interval); // Llamar a la función update cada intervalo de tiempo
  }
  animar() {
    if (this.state === 'tipiar') {
      // Si el estado es tipiar
      this.index++; // Incrementar el índice

      if (this.index === this.text.length) {
        // Si el índice llega al final del texto
        this.state = 'esperar'; // Cambiar el estado a esperar
        this.timePassed = 0; // Reiniciar el tiempo pasado
      }
    } else if (this.state === 'esperar') {
      // Si el estado es esperar
      this.timePassed += this.interval; // Incrementar el tiempo pasado

      if (this.timePassed >= this.waitTime) {
        // Si el tiempo pasado es mayor o igual al tiempo de espera
        this.state = 'borrar'; // Cambiar el estado a borrar
      }
    } else if (this.state === 'borrar') {
      // Si el estado es borrar
      this.index--; // Decrementar el índice
      if (this.index === 0) {
        // Si el índice llega al principio del texto
        this.state = 'tipiar'; // Cambiar el estado a tipiar
        this.textIndex++; // Incrementar el índice del texto
        this.text = this.textos[this.textIndex % this.textos.length]; // Obtener el texto correspondiente al índice usando el operador módulo
      }
    }
  }
}
