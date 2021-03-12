import { Directive, ElementRef, Renderer, Renderer2 } from '@angular/core';

@Directive({
  selector: ' p[estiloamarelo]'
})
export class EstiloamareloDirective {

  constructor(private elemento: ElementRef, private renderer: Renderer2) { 
    this.renderer.setStyle(this.elemento.nativeElement, 'background-color', 'yellow');
  }

}
