import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  elementSelected = false

  constructor(public elementRef: ElementRef) { }

  @HostListener('click')
  onClick() {
    this.elementSelected = !this.elementSelected
    if (this.elementSelected) {
      this.elementRef.nativeElement.classList.add('toggle')
    } 
    else {
      this.elementRef.nativeElement.classList.remove('toggle')
    }
  }
}
