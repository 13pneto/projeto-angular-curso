import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class CriarDiretivaFundoAmareloDirective {

  constructor(private elementRef: ElementRef) { 
    this.elementRef.nativeElement.style.backgroundColor = 'yellow'; //alterar background-color

  }
}
