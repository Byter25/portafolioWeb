import { Links, IconLink } from '@core/models/link.interface';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { NgClass } from '@angular/common';

@Component({
  selector: 'icon-link',
  template: `
    <ul class="flex flex-col gap-y-4 p-2">
      @for (item of renderData; track item.link) {
        <li
          class="flex items-center uppercase transition-all ease-in-out hover:scale-105 rounded-md shadow-md shadow-gray-800/50 dark:shadow-black"
          [ngClass]="colorbg"
        >
          <a
            [routerLink]="item.link"
            class="py-2 px-4 w-full h-full text-white font-semibold "
            [ngClass]="
               hasIcon(item) ? 'text-left' : 'text-center'"
          >
            @if (hasIcon(item)) {
              <i [class]="item.icon + ' mr-4'"></i>
            }
            {{ item.name | transloco }}
          </a>
        </li>
      }
    </ul>
  `,
  standalone: true,
  imports: [RouterLink, TranslocoModule, NgClass],
})
export class IconLinkComponent {
  @Input() colorbg: string = 'bg-[var(--primary-color)] hover:bg-[var(--hover-color)]';
  @Input() link!: IconLink |Links;
  @Input() links!: IconLink[] | Links[]; 

  get renderData(): Links[] {
    if (this.links?.length) return this.links;
    if (this.link) return [this.link];
    return [];
  }
  
  hasIcon(link: Links): link is IconLink {
    return !!link && 'icon' in link && typeof (link as IconLink).icon === 'string';
  }
}
