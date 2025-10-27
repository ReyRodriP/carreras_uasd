import { Component, Renderer2, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterOutlet],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  darkMode:boolean = false
  open:boolean = false

  constructor (private renderer: Renderer2, private el:ElementRef){}

  public toggleTheme():void {
    const texto = this.el.nativeElement.querySelector('.mode-text')
    this.darkMode = !this.darkMode;

    if(this.darkMode) {
      this.renderer.addClass(document.body, 'dark')
      texto.innerText = 'Modo claro'
    } else {
      this.renderer.removeClass(document.body, 'dark')
      texto.innerText = 'Modo oscuro'
    }
  }

  public openSidebar():void {
    const sidebar = this.el.nativeElement.querySelector('.sidebar')
    this.open = !this.open

    if(this.open) {
      this.renderer.addClass(sidebar, 'close')
    } else {
      this.renderer.removeClass(sidebar, 'close')
    }

  }
}
