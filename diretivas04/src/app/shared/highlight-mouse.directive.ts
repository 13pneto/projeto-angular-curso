import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') PassouMouse(){
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') Saiu(){
    this.elementRef.nativeElement.style.backgroundColor = 'white';
  }

  constructor(private elementRef: ElementRef) {
    
   }

}
