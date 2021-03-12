import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[hostlistener]'
})
export class HostlistenerDirective {

  constructor() { }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter')
  onMouse(){
    this.backgroundColor = 'red';
  }

  @HostListener('mouseleave')
  mouseOver(){
    this.backgroundColor = 'white';
  }

}
