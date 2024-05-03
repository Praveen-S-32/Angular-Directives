import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomAttribute]'
})
export class CustomAttributeDirective implements OnInit {

  constructor(private el: ElementRef, private rendere: Renderer2) { }

  ngOnInit(): void {
    // this.el.nativeElement.style.color = 'red'
    this.rendere.setStyle(this.el.nativeElement, "color", "green");
  }

  // hostListener
  @HostListener("mouseenter") onmouseenter() {
    this.rendere.setStyle(this.el.nativeElement, "color", "red");
    this.rendere.setStyle(this.el.nativeElement, "font", "50px");
  }

  @HostListener("mouseout") onmouseout() {
    this.rendere.setStyle(this.el.nativeElement, "color", "green");
    this.rendere.setStyle(this.el.nativeElement, "font", "10px");
  }

  @HostBinding('style.backgroundColor') color: any;

  @HostListener('click') onMouseClick() {
    this.color = 'pink';
  }

}
