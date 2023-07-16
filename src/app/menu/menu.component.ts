import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
}
export function backdrop(){
  const liItem = document.querySelectorAll("#menu li")
  const backdrop = document.querySelector("#backdrop") as HTMLElement
  liItem.forEach((item) => {
    item.addEventListener("mouseenter",()=> {
      const {left, top, width, height} = item.getBoundingClientRect()
      const {clientHeight,clientWidth} = item
      console.log({left, top, width, height})
      console.log({clientHeight,clientWidth})

      backdrop.style.setProperty("--left",`${left}px`)
      backdrop.style.setProperty("--top",`${top}px`)
      backdrop.style.setProperty("--width",`${width}px`)
      backdrop.style.setProperty("--height",`${height}px`)
      backdrop.style.opacity = "1"
      backdrop.style.visibility = "visible"
    })
  })
}