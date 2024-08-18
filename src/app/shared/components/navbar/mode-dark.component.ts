import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'mode-dark',
  standalone: true,
  imports: [NgClass],
  template: `
<div class="flex items-center">
  <input type="checkbox" id="darkModeToggle" (change)="toggleDarkMode($event)" [checked]="isDarkMode" class="toggle-checkbox">
  <label for="darkModeToggle" class="ml-2 cursor-pointer">
    <span class="material-icons" [ngClass]="{ 'text-yellow-300': isDarkMode, 'text-gray-800': !isDarkMode }">
      {{ isDarkMode ? 'dark_mode' : 'light_mode' }}
    </span>
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
