import {Directive, ElementRef, inject, input} from '@angular/core';

// Attribute Directive
@Directive({
  selector: '[appHighlight]',
  host: {
    '(mouseenter)': 'highlight(color())',
    '(mouseleave)': 'highlight("")'
  }
})
export class Highlight {

  elementRef = inject(ElementRef);

  color = input('yellow');

  highlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
