import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[alBorderCard]'
})
export class BorderCardDirective {
  private initColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 250;

  constructor(private el: ElementRef) {
    

    this.setHeight(this.defaultHeight);
    this.setBorder(this.initColor);
   }

   @Input('alBorderCard') borderColor: string;

   @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
   }

   @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initColor);
   }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
    
  }

  setBorder(color: string) {
    //let border = color;
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}
