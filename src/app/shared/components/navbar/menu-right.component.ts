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
import { SocialIcons } from '../social-icons.component';

@Component({
  selector: 'menu-right',
  standalone: true,
  imports: [NgStyle, RouterLink, RouterLinkActive, MatIconModule],
  template: `
    <input type="checkbox" class="hidden" id="navright" />
    <label class="text-center flex justify-center items-center" for="navright">
      <mat-icon>menu</mat-icon>
    </label>
    <ul
      id="rightnav"
      class=" -left-full fixed md:hidden border-r-2 bg-inherit border-red-600 top-0 w-2/5 h-screen uppercase transition-all duration-300 ease-in-out font-bold "
    >
      <label for="navright" class="text-center flex items-center px-4 py-2">
        <mat-icon>close</mat-icon>
      </label>
      @for(nav of listaNav;track nav){
      <li
        class="pl-4 py-2 border-l-8 border-gray-200 dark:border-gray-700 hover:border-red-400 dark:hover:border-red-800 transition-all duration-300 ease-in-out"
        routerLinkActive="dark:border-red-600 border-red-600"
        [routerLinkActiveOptions]="{ exact: true }"
      >
        <a [routerLink]="nav.link">{{ nav.nombre }}</a>
      </li>
      }
      <ng-content> </ng-content>
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
