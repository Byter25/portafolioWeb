import { MatIconModule } from '@angular/material/icon';
import { NgClass } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Input,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Links } from '@core/models/link.interface';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'menu-right',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule, TranslocoModule, NgClass],
  template: `

    <label class="text-center flex justify-center items-center" for="navright">
      <mat-icon style="width: 28px; height: 28px; font-size: 28px;">menu</mat-icon>
    </label>
    <input type="checkbox" class="hidden peer" id="navright" />
    <ul
      id="rightnav"
      class="-left-full peer-checked:left-0 fixed md:hidden top-0 w-2/3 h-screen uppercase transition-all duration-300 ease-in-out font-bold shadow-md shadow-neutral-300"
      [ngClass]="fondo"
    >
    
      <label for="navright" class="p-4 flex items-center w-full justify-end">
        <mat-icon  style="width: 28px; height: 28px; font-size: 28px;">close</mat-icon>
      </label>
      @for(nav of listaNav;track nav){
      <li
        class="pl-4 py-2 border-l-4  border-gray-200 dark:border-gray-600 transition-all duration-300 ease-in-out"
        routerLinkActive="dark:border-red-600 border-red-600"
        [routerLinkActiveOptions]="{ exact: true }"
      >
        <a [routerLink]="nav.link">{{ nav.nombre | transloco }}</a>
      </li>
      }
      <ng-content> </ng-content>
    </ul>
  `,
})
export class MenuRightComponent {
  @Input() listaNav: Links[] = [];
  @Input() fondo: string = 'bg-white dark:bg-back';
}
