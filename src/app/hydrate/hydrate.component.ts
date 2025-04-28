import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-hydrate',
  imports: [],
  templateUrl: './hydrate.component.html',
  styleUrl: './hydrate.component.scss'
})
export class HydrateComponent {

  // constructor() {
  //   localStorage.setItem('key', 'test'); 
  // // No funcionará ya que en el servidor no hay localStorage para ello se debe validar de la siguiente forma
  // }

  isBroser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor() {
    if (this.isBroser) {
      localStorage.setItem('key', 'test'); // No funcionará ya que en el servidor no hay localStorage
    }
  }
}
