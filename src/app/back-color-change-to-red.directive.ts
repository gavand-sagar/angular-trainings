import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  // selector: '[appBackColorChangeToRed]'
  // selector: 'button'//every buuton
  selector: 'input'
})
export class BackColorChangeToRedDirective {

  // @HostListener('click')
  // sdfsadf() {

  //   alert();
  // }


  @HostListener('mouseenter') 
  mouserEnter() {
    this.type = 'text';
    this.placeholder = 'something else...'
  }


  @HostListener('mouseleave')
  mouseLeave() {
    this.type = 'password';
    this.placeholder = 'Enter some text here...';
  }


  @HostListener('click')
  click() {

    //this.type = 'text';
  }



  @HostBinding('placeholder')
  placeholder: string = 'Enter some text here...';


  @HostBinding('type')
  type: string = 'password';


  constructor(private elementRef: ElementRef) {
    // this.elementRef.nativeElement.style.backgroundColor = 'red'
  }

}
