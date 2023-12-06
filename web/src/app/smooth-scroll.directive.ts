import { Directive, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appSmoothScroll]'
})
export class SmoothScrollDirective {
  @Input() targetId: string = '';

  constructor(private router: Router) {}

  @HostListener('click') onClick() {
    this.scrollToElement(this.targetId);
  }

  private scrollToElement(targetId: string): void {
    if (targetId) {
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

        this.router.navigate([], { fragment: targetId });
      }
    }
  }
}
