import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { Progreso } from '../progreso.interface';
import { FloatComponent } from '@shared/components/float.component';
@Component({
  selector: 'process-bar',
  standalone: true,
  imports: [FloatComponent],
  template: `
    <float class="font-bold uppercase">
      <h3 class="text-2xl text-center p-3 uppercase tracking-widest">{{ nombre }}</h3>
      <div class="flex flex-1 flex-col gap-y-4 justify-evenly">
        @for(sec of progresos;track sec){
        <div class="flex flex-col w-full relative items-center justify-center">
          <span class="absolute text-white ">{{ sec.nombre }}</span>
          <progress
            [id]="sec.nombre"
            [value]="sec.progreso"
            [max]="sec.max"
          ></progress>
        </div>
        }
      </div>
    </float>
  `,
  styles: `
  progress {
    @apply w-[300px] h-9
}

progress::-webkit-progress-bar {
  @apply rounded-lg bg-gray-500/70
}

progress::-webkit-progress-value {
  @apply bg-red-600 rounded-lg
}

progress::-moz-progress-bar {
  @apply bg-white/50
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
