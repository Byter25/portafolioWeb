import { NgStyle } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-menu',
  template: ` <!--CONTENEDOR DEL MENU DE NAVEGACION-->
    <header
      class="fixed flex flex-col justify-between z-20 top-0 left-0 h-screen w-1/5 border-r-4 border-solid shadow-xl transition-all slidebar-toggle:checked:-left-100"
    >
      <!--ESTADO DE LA BARRA LATERAL-->
      <input type="checkbox" id="slidebar-toggle" class=" peer" />
      <!--DIVISION PARA EL LOGO-->
      <div class="flex text-4xl p-2 h-16">
        <img src="../../assets/logo.png" class="h-14 pr-2" />
        <!--ESCRITURA AUTOMATICA-->
        <p class="text-4xl uppercase font-mono my-2">
          {{ text.substring(0, index) }}<span class="animate-ping">|</span>
        </p>
        <!--CERRAR BARRA LATERAL-->
        <label
          for="slidebar-toggle"
          class="absolute right-0 py-2 px-4 slidebar-toggle:checked:hidden"
          id="cerrar"
        >
          <i class="fa-solid fa-xmark"></i>
        </label>
      </div>
      <!-- NAVEGACION -->
      <nav class="p-4 uppercase text-2xl">
        <ul class="flex flex-col gap-5 font-bold ">
          <li class="h-12 py-2 px-6 w-fit"><a href="#inicio">Inicio</a></li>
          <li class="h-12 py-2 px-6 w-fit"><a href="#sobre_mi">sobre mi</a></li>
          <li class="h-12 py-2 px-6 w-fit"><a href="#skills">skills</a></li>
          <li class="h-12 py-2 px-6 w-fit">
            <a href="#curriculum">certificados</a>
          </li>
          <li class="h-12 py-2 px-6 w-fit">
            <a href="#portfolio">proyectos</a>
          </li>
          <li class="h-12 py-2 px-6 w-fit"><a href="#contacto">contacto</a></li>
        </ul>
      </nav>
      <!-- AJUSTES -->
      <div>
        <ul class="flex text-2xl uppercase px-6 justify-between">
          <li class="p-2 h-16 w-16"><a href="">a</a></li>
          <li class="p-2 h-16 w-16"><a href="">a</a></li>
          <li class="p-2 h-16 w-16"><a href="">a</a></li>
        </ul>
      </div>
      <!-- BACKDROP -->
      <div
        #backdrop
        class="absolute backdrop-blur-lg bg-white/30 transition-all duration-300 -z-10"
        [ngStyle]="{
          left: 'var(--left)',
          top: 'var(--top)',
          width: 'var(--width)',
          height: 'var(--height)'
        }"
      ></div>
    </header>
    <!-- ABRIR LA BARRA LATERAL -->
    <label
      for="slidebar-toggle"
      class="absolute text-3xl p-2 top-0 z-50 slidebar-toggle"
      id="abrir"
    >
      <i class="fa-solid fa-bars"></i>
    </label>`,
  styles: [
    `
      @import 'tailwindcss/tailwind.css';

      #slidebar-checker:checked ~ .slidebar {
        left: -100%;
      }
      .backdrop {
        left: var(--left);
        top: var(--top);
        width: var(--width);
        height: var(--height);
      }
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
  imports: [NgStyle],
})
export class MenuComponent implements OnInit {
  constructor() {
    // Llamar a la función update cada intervalo de tiempo
    setInterval(() => this.update(), this.interval);
  }
  @ViewChild('backdrop') backdrop: ElementRef | undefined;
  // El texto que se va a mostrar
  text = 'Byter';
  // El índice de la letra actual
  index = 0;
  // El estado del efecto: tipiar o borrar
  state = 'tipiar';
  // El intervalo de tiempo entre cada letra
  interval = 100;
  //textos
  texts = ['Developer', 'Software', 'goku dios'];
  //indice del texto actual
  textIndex = 0;
  // El tiempo que se debe esperar antes de borrar el texto
  waitTime = 500;
  // El tiempo que ha pasado desde que se terminó de tipiar el texto
  timePassed = 0;

  update() {
    // Si el estado es tipiar
    if (this.state === 'tipiar') {
      // Incrementar el índice
      this.index++;
      // Si el índice llega al final del texto
      if (this.index === this.text.length) {
        // Cambiar el estado a esperar
        this.state = 'esperar';
        // Reiniciar el tiempo pasado
        this.timePassed = 0;
      }
    }
    // Si el estado es esperar
    else if (this.state === 'esperar') {
      // Incrementar el tiempo pasado
      this.timePassed += this.interval;
      // Si el tiempo pasado es mayor o igual al tiempo de espera
      if (this.timePassed >= this.waitTime) {
        // Cambiar el estado a borrar
        this.state = 'borrar';
      }
    }
    // Si el estado es borrar
    else if (this.state === 'borrar') {
      // Decrementar el índice
      this.index--;
      // Si el índice llega al principio del texto
      if (this.index === 0) {
        // Cambiar el estado a tipiar
        this.state = 'tipiar';
        // Incrementar el índice del texto
        this.textIndex++;
        // Obtener el texto correspondiente al índice usando el operador módulo
        this.text = this.texts[this.textIndex % this.texts.length];
      }
    }
  }
  ngOnInit(): void {
    // Obtener los elementos del menú
    const menuItems = document.querySelectorAll('nav li');
    // Añadir un evento de mouseenter a cada elemento
    menuItems.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        // Obtener las dimensiones y la posición del elemento
        const { left, top, width, height } = item.getBoundingClientRect();
        // Cambiar las propiedades del elemento que se va a mover y cambiar de tamaño
        this.backdrop?.nativeElement.style.setProperty('--left', `${left}px`);
        this.backdrop?.nativeElement.style.setProperty('--top', `${top}px`);
        this.backdrop?.nativeElement.style.setProperty('--width', `${width}px`);
        this.backdrop?.nativeElement.style.setProperty(
          '--height',
          `${height}px`
        );
      });
    });
  }
}
