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
import { Links } from '@core/models/link.interface';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'menu-right',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, MatIconModule, TranslocoModule],
  template: `
    <input type="checkbox" class="hidden" id="navright" />
    <label class="text-center flex justify-center items-center" for="navright">
      <mat-icon>menu</mat-icon>
    </label>
    <ul
      id="rightnav"
      class=" -left-full fixed md:hidden bg-inherit top-0 w-2/3 h-screen uppercase transition-all duration-300 ease-in-out font-bold"
    >
      <label for="navright" class="text-center flex items-center px-4 py-2">
        <mat-icon>close</mat-icon>
      </label>
      @for(nav of listaNav;track nav){
      <li
        class="pl-4 py-2 border-l-4  border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out"
        routerLinkActive="dark:border-red-600 border-red-600"
        [routerLinkActiveOptions]="{ exact: true }"
      >
        <a [routerLink]="nav.link">{{ nav.nombre | transloco }}</a>
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
