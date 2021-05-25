import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur(){
    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase();
  }

  @HostListener('focus') onFocus(){
    console.log('On Focus');
  }

}
