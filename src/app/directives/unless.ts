import {Directive, effect, inject, input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[unless]',
})
export class Unless {

  private hasView = false;

  templateRef = inject(TemplateRef);
  viewContainer = inject(ViewContainerRef);

  unless = input(true);

  constructor() {
    effect(() => {
      if (!this.unless() && !this.hasView) {
        // Mostro il contenuto del template
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      } else if (this.unless() && this.hasView) {
        // Pulisco il template
        this.viewContainer.clear();
        this.hasView = false;
      }
    });
  }
}
