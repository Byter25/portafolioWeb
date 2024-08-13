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
    <nav>
      <input type="checkbox" class="hidden" id="navright">
      <label class=" text-center flex justify-center items-center"for="navright">
          <mat-icon >menu</mat-icon>
        </label>
      <ul id="rightnav"  class=" -right-full z-20 fixed md:hidden top-0 w-52 bg-black h-screen text-white uppercase ">
        <label for="navright">
          <mat-icon class="m-2">close</mat-icon>
        </label>
        @for(nav of listaNav;track nav){
        <li class="pl-4 py-2 hover:bg-gray-700" routerLinkActive="bg-red-600/50" [routerLinkActiveOptions]="{ exact: true }">
          <a
            [routerLink]="nav.link"
            >{{ nav.nombre }}</a
          >
        </li>
        }
      </ul>
    </nav>
  `,
  styles: [
    `
      #navright:checked ~ #rightnav {
        right:0;
      }
    `,
  ],
})
export class MenuRightComponent implements AfterViewInit {
  @ViewChild('backdrop') backdrop: ElementRef | undefined;
  @Input() listaNav: Links[] = [];

  ngAfterViewInit(): void {
  }
}
