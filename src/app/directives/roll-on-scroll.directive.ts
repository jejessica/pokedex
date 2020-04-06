import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[rollOnScroll]'
})
export class RollOnScrollDirective {

  @HostListener('window:scroll', []) onWindowScroll() {
    const rotation = `translateY(-50%) rotateZ(${window.scrollY / 15}deg)`;

    this.renderer.setStyle(
      this.elementeRef.nativeElement,
      'transform',
      rotation
    )
  }

  constructor(
    private elementeRef: ElementRef,
    private renderer: Renderer2
  ) { }

}
