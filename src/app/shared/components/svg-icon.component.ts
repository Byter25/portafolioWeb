import { NgClass, NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SafeHtmlPipe } from '@shared/pipes/safe-html.pipe';

@Component({
  selector: 'svg-icon',
  standalone: true,
  imports: [ SafeHtmlPipe],
  template: `
    <div
      [innerHTML]="svgContent | safeHtml"
      class="transition-colors duration-300 aspect-square w-[1.875rem] "
    >
  </div>
  `,
})
export class SvgIconComponent {
  @Input() src!: string; // ej: 'assets/svg/angular.svg'
  svgContent!: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.src, { responseType: 'text' }).subscribe(content => {
      this.svgContent = content;
    });
  }
}
