import { MatIconModule } from '@angular/material/icon';
import { NgStyle } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Links } from './link.interface';

@Component({
  selector: 'menu-right',
  standalone: true,
  imports: [NgStyle, RouterLink, RouterLinkActive, MatIconModule],
  template: `
      <input type="checkbox" class="hidden" id="navright" />
      <label
        class="text-center flex justify-center items-center"
        for="navright"
      >
        <mat-icon>menu</mat-icon>
      </label>
      <ul
        id="rightnav"
        class=" -left-full fixed md:hidden top-0 w-52 h-screen uppercase transition-all duration-300 ease-in-out bg-slate-950 z-[999]"
      >
        <label for="navright" class="text-center flex items-center px-4 py-2">
          <mat-icon>close</mat-icon>
        </label>
        @for(nav of listaNav;track nav){
        <li
          class="pl-4 py-2 border-l-4 border-white hover:border-red-300 transition-all duration-300 ease-in-out"
          routerLinkActive="border-red-600"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          <a [routerLink]="nav.link">{{ nav.nombre }}</a>
        </li>
        }
      </ul>
  `,
  styles: [
    `
      #navright:checked ~ #rightnav {
        left: 0;
      }
    `,
  ],
})
export class MenuRightComponent implements AfterViewInit {
  @ViewChild('backdrop') backdrop: ElementRef | undefined;
  @Input() listaNav: Links[] = [];

  ngAfterViewInit(): void {}
}
