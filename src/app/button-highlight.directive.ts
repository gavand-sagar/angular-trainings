import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appButtonHighlight]'
})
export class ButtonHighlightDirective implements AfterViewInit {

  @HostListener('mouseenter')
  mouserEnter() {
    // if (this.isallow) {

    //   this.elementRef.nativeElement.style.backgroundColor = 'blue';
    // }
  }

  @HostListener('mouseleave')
  mouserLeave() {
    // this.elementRef.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('keyup')
  keyup() {
    this.elementRef.nativeElement.style.backgroundColor = this.value

  }

  @Input('appButtonHighlight')
  isallow: boolean = true;

  @HostBinding('value')
  value: string;


  // @HostListener('click', ['$event'])
  // btnClick(event: Event) {
  //   event.stopPropagation()
  //   alert('directive')
  // }


  @HostBinding('class')
  classes: string = ''

  // @HostBinding('disabled')
  disabled: boolean = false


  constructor(
    private elementRef: ElementRef
  ) {

  }
  ngAfterViewInit(): void {

    console.log(this.elementRef.nativeElement)
    this.elementRef.nativeElement.style.backgroundColor = 'red';
    // this.classes = 'this.classes'

    this.disabled = true;

  }



}
