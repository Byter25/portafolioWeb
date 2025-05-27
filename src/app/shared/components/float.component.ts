import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'float',
  standalone: true,
  imports: [NgClass],
  template: `
    <aside
      class="relative py-2 px-4 rounded-md  hover:scale-105 ease-in-out h-full w-full overflow-hidden shadow-md dark:shadow-black hover:shadow-red-600 z-10"
        [ngClass]="{
    'flex flex-col items-center justify-center': estaCentrado,
    'block': !estaCentrado
  }"
      >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      @if(titulo!=''){
      <h3 class="uppercase font-bold mb-4 text-2xl text-center">{{ titulo }}</h3>
      }
      <ng-content> </ng-content>
    </aside>
  `,
  styles: `
  aside div:nth-child(1){
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width:100%;
    height:2px;
    background: linear-gradient(to right, transparent, red);
    animation: left-right 4s linear infinite;
  }
  aside div:nth-child(2){
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    width:2px;
    height:100%;
    background: linear-gradient(to bottom, transparent, red);
    animation: top-bottom 4s linear infinite;
    animation-delay: 2s;
  }
  aside div:nth-child(3){
    position: absolute;
    z-index: 10;
    bottom: 0;
    right: 0;
    width:100%;
    height:2px;
    background: linear-gradient(to left, transparent, red);
    animation: right-left 4s linear infinite;
  }
  aside div:nth-child(4){
    position: absolute;
    z-index: 10;
    bottom: 0;
    left: 0;
    width: 2px;
    height:100%;
    background: linear-gradient(to top, transparent, red);
    animation: bottom-top 4s linear infinite;
    animation-delay: 2s;
  }

  @keyframes left-right {
    0%{ transform: translateX(-100%);
    }
    100%{
      transform: translateX(100%);
    }
  }
  @keyframes right-left {
    0%{ transform: translateX(100%);
    }
    100%{
      transform: translateX(-100%);
    }
  }
  @keyframes top-bottom {
    0%{ transform: translateY(-100%);
    }
    100%{
      transform: translateY(100%);
    }
  }
  @keyframes bottom-top {
    0%{ transform: translateY(100%);
    }
    100%{
      transform: translateY(-100%);
    }
  }
  `,
})
export class FloatComponent {
  @Input() titulo?: string;
  @Input() centrar: boolean = true;

  get estaCentrado(): boolean {
    return this.centrar !== false;
  }

}
