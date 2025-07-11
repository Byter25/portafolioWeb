import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'select-theme',
  standalone: true,
  imports: [],
  template: `
<div class="text-sm text-center">
  <span class="text-lg text-center w-full uppercase" [style.color]="primaryColor">{{ primaryColor }}</span>
    <input
        type="color"
        [value]="primaryColor"
        class="h-8 rounded shadow-md cursor-pointer w-full border-none p-0 mb-2"
      (input)="onColorInputChange($event)"
      (dblclick)="randomizeColor()"
      >
    <button
      (click)="resetColor()"
      class="bg-gray-300 w-full h-8 hover:bg-gray-400 text-black px-2 py-1 rounded shadow"
    >
      🔄 Restaurar
    </button>
</div>
  `,
  styles: ``
})
export class SelectThemeComponent implements OnInit {
  defaultColor = '#dc2626';
  defaultHover = this.adjustColor(this.defaultColor, +40);
  defaultTransparent = this.hexToRgba(this.defaultColor, 0.4);

  primaryColor: string = this.defaultColor;
  hoverColor: string = this.defaultHover;
  transparentColor: string = this.defaultTransparent;

  ngOnInit(): void {
    const saved = localStorage.getItem('primary-color');
    const hoverSaved = localStorage.getItem('hover-color');

    if (saved) {
      this.primaryColor = saved;
      this.hoverColor = hoverSaved ?? this.adjustColor(saved, -20);
      this.transparentColor = this.hexToRgba(saved, 0.4);
    }

    this.applyColor(this.primaryColor, this.hoverColor, this.transparentColor);
  }

  getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }

  adjustColor(hex: string, amount: number): string {
    let usePound = false;
    if (hex[0] === '#') {
      hex = hex.slice(1);
      usePound = true;
    }

    const num = parseInt(hex, 16);
    let r = (num >> 16) + amount;
    let g = ((num >> 8) & 0x00ff) + amount;
    let b = (num & 0x0000ff) + amount;

    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));

    return (usePound ? '#' : '') + (r << 16 | g << 8 | b).toString(16).padStart(6, '0');
  }

  hexToRgba(hex: string, alpha: number): string {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  applyColor(primary: string, hover: string, transparent: string): void {
    this.primaryColor = primary;
    this.hoverColor = hover;
    this.transparentColor = transparent;

    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--hover-color', hover);
    document.documentElement.style.setProperty('--primary-color-transparent', transparent);
  }

  randomizeColor(): void {
    const newColor = this.getRandomColor();
    const hoverVariant = this.adjustColor(newColor, -20);
    const transparent = this.hexToRgba(newColor, 0.4);

    this.applyColor(newColor, hoverVariant, transparent);
    localStorage.setItem('primary-color', newColor);
    localStorage.setItem('hover-color', hoverVariant);
  }

  resetColor(): void {
    this.applyColor(this.defaultColor, this.defaultHover, this.defaultTransparent);
    localStorage.removeItem('primary-color');
    localStorage.removeItem('hover-color');
  }

  onColorInputChange(event: Event): void {
    const color = (event.target as HTMLInputElement).value;
    const hover = this.adjustColor(color, -20);
    const transparent = this.hexToRgba(color, 0.4);
    this.applyColor(color, hover, transparent);
    localStorage.setItem('primary-color', color);
    localStorage.setItem('hover-color', hover);
  }

  onColorDoubleClick(): void {
    this.randomizeColor();
  }
}