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

@Component({
  selector: 'menu-right',
  standalone: true,
  imports: [NgStyle, RouterLink, RouterLinkActive, MatIconModule],
  template: `
    <nav class="z-20 fixed md:hidden top-0 right-0 w-72 bg-black h-screen text-white uppercase">
      <ul>
        <mat-icon class="m-2">close</mat-icon>
        @for(nav of listaNav;track nav){
        <li class="pl-4 py-2 hover:bg-gray-700">
          <a
            href="#{{nav}}"
            routerLinkActive="bg-red-600"
            [routerLinkActiveOptions]="{ exact: true }"
            >{{ nav }}</a
          >
        </li>
        }
      </ul>
    </nav>
  `,
  styles: [
    `
      #slidebar-checker:checked ~ .slidebar {
        left: -100%;
      }
      .backdrop {
        left: var(--left);
        top: var(--top);
        width: var(--width);
        height: var(--height);
      }
    `,
  ],
})
export class MenuRightComponent implements AfterViewInit {
  @ViewChild('backdrop') backdrop: ElementRef | undefined;
  @Input() listaNav: string[] = [];

  ngAfterViewInit(): void {
  }
}
