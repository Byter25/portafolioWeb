import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'select-lenguaje',
  standalone: true,
  template: `
    <div class="flex flex-col text-sm">
      @for (lang of langs; track lang) {
        <label
          class="p-2 cursor-pointer transition-colors duration-300 rounded"
          [ngClass]="{
            'bg-[--primary-color] text-white': activeLang === lang,
            'bg-transparent hover:bg-[--primary-color-transparent]': activeLang !== lang
          }"
        >
          <input
            type="radio"
            name="lang"
            [value]="lang"
            [(ngModel)]="activeLang"
            (change)="changeLang(lang)"
            class="hidden"
          />
          {{ ('idioma.' + lang) | transloco }}
        </label>
      }
    </div>
  `,
  imports: [NgClass, TranslocoModule, FormsModule],
})
export class SelectLenguajeComponent implements OnInit {
  langs: string[] = [];
  activeLang!: string;

  constructor(private translocoService: TranslocoService) {}

  ngOnInit(): void {
    this.langs = this.translocoService.getAvailableLangs() as string[];
    this.activeLang = this.translocoService.getActiveLang();
  }

  changeLang(lang: string): void {
    this.translocoService.setActiveLang(lang);
  }
}
