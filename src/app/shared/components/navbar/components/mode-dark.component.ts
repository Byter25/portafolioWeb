import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'mode-dark',
  standalone: true,
  imports: [NgClass, TranslocoModule],
  template: `
    <div class="flex items-center w-fit">
      <input
        type="checkbox"
        id="darkModeToggle"
        (change)="toggleDarkMode($event)"
        [checked]="isDarkMode"
        class="hidden"
      />
      <label
        for="darkModeToggle"
        class="cursor-pointer flex items-center gap-2 p-2"
      >
        <span
          class="material-icons mr-1"
          [ngClass]="{
            'text-white': isDarkMode,
            'text-black': !isDarkMode
          }"
        >
          {{ isDarkMode ? 'dark_mode' : 'light_mode' }}
        </span>
        <p>{{ isDarkMode ? ('modo.oscuro'| transloco) : ('modo.claro' | transloco) }}</p>
      </label>
    </div>
  `,
  styles: ``,
})
export class ModeDarkComponent {
  isDarkMode = false;

  ngOnInit() {
    // Verifica si el usuario ya tiene un tema guardado en localStorage
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    this.updateTheme();
  }

  toggleDarkMode(event: any) {
    this.isDarkMode = event.target.checked;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.updateTheme();
  }

  updateTheme() {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
