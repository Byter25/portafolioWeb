import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { Progreso } from '../progreso.interface';
@Component({
  selector: 'process-bar',
  standalone: true,
  imports: [],
  template: `
    <div
      [id]="nombre"
      class="flex flex-col h-full bg-slate-950 p-4 shadow-md shadow-black hover:scale-105 hover:shadow-lg hover:shadow-red-600 transition-all duration-300 justify-evenly uppercase font-bold"
    >
      <h3 class="text-2xl text-center p-3">{{ nombre }}</h3>
      <div class="flex flex-1 flex-col gap-y-4">
        @for(sec of progresos;track sec){
        <div class="flex flex-col w-full relative items-center">
          <span class="absolute m-auto">{{ sec.nombre }}</span>
          <progress
            [id]="sec.nombre"
            [value]="sec.progreso"
            [max]="sec.max"
          ></progress>
        </div>
        }
      </div>
    </div>
  `,
  styles: `
  progress {
  width: 100%;
  min-width:250px;
  height: 30px;
  color: black;
}

progress::-webkit-progress-bar {
  @apply rounded-md bg-gray-800
}

progress::-webkit-progress-value {
  @apply bg-red-600;
  border-radius: 5px;
}

progress::-moz-progress-bar {
  background-color: black;
  border-radius: 5px;
}
  `,
})
export class ProgressBarComponent implements AfterViewInit {
  @Input() progresos: Progreso[] = [];
  @Input() max: Number = 0;
  @Input() value: number = 0;
  @Input() nombre: string = '';
  constructor(private cdRef: ChangeDetectorRef) {}
  ngAfterViewInit(): void {
    const barraProgreso = document.getElementById(
      this.nombre
    ) as HTMLProgressElement;
    this.cdRef.detectChanges();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateProgress(barraProgreso, this.value);
          } else {
            barraProgreso.value = 0;
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(barraProgreso);
  }

  animateProgress(tarjet: HTMLProgressElement, finalValue: number): void {
    let progressValue = 0;
    const maxProgress = finalValue;
    const increment = 1;
    const intervalTime = 30; // ms

    const interval = setInterval(() => {
      progressValue += increment;
      if (progressValue > maxProgress) {
        clearInterval(interval);
      } else {
        tarjet.value = progressValue;
      }
    }, intervalTime);
  }
}
