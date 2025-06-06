import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'select-lenguaje',
  standalone: true,
  imports: [NgClass, FormsModule, TranslocoModule],
  template: `
        <div class="flex flex-col text-sm">
          <label
            class="p-2 cursor-pointer"
            [ngClass]="{
              'bg-red-500 text-white': activeLang === 'es',
              'bg-transparent hover:bg-red-100 dark:hover:bg-red-900':
                activeLang !== 'es'
            }"
          >
            <input
              type="radio"
              name="lang"
              value="es"
              (change)="changeLang('es')"
              [(ngModel)]="activeLang"
              class="hidden"
            />
            Español
          </label>

          <label
            class="p-2 cursor-pointer"
            [ngClass]="{
              'bg-red-500 text-white': activeLang === 'en',
              'bg-transparent hover:bg-red-100 dark:hover:bg-red-900':
                activeLang !== 'en'
            }"
          >
            <input
              type="radio"
              name="lang"
              value="en"
              (change)="changeLang('en')"
              [(ngModel)]="activeLang"
              class="hidden"
            />
            English
          </label>
        </div>
  `,
  styles: ``,
})
export class SelectLenguajeComponent {
  
  activeLang = this.translocoService.getActiveLang();

  constructor(private translocoService: TranslocoService) {}

  ngOnInit(): void {
    const storedLang = localStorage.getItem('lang');
    if (storedLang) {
      this.translocoService.setActiveLang(storedLang);
      this.activeLang = storedLang;
    } else {
      this.activeLang = this.translocoService.getActiveLang();
    }
  }

  changeLang(lang: string) {
    this.translocoService.setActiveLang(lang);
    localStorage.setItem('lang', lang);
    this.activeLang = lang;
  }

}
