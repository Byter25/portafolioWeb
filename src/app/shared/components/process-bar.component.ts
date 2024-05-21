import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
@Component({
  selector: 'process-bar',
  standalone: true,
  imports: [],
  template: `
    <div class="p-2 flex flex-col w-full relative items-center justify-center">
      <span class="uppercase font-bold absolute m-auto">{{ nombre }}</span>
      <progress [id]="nombre" value="0" [max]="max"></progress>
    </div>
  `,
  styles: `
  progress {
  width: 100%;
  height: 30px;
  color: black;
}

progress::-webkit-progress-bar {
  @apply rounded-md bg-black/50
}

progress::-webkit-progress-value {
  background-color: red;
  border-radius: 5px;
}

progress::-moz-progress-bar {
  background-color: black;
  border-radius: 5px;
}
  `,
})
export class ProgressBarComponent implements AfterViewInit {
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
