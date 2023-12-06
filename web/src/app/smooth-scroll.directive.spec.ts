import { ActivatedRoute, Router } from '@angular/router';
import { SmoothScrollDirective } from './smooth-scroll.directive';

describe('SmoothScrollDirective', () => {
  it('should create an instance', () => {
    const directive = new SmoothScrollDirective(new Router());
    expect(directive).toBeTruthy();
  });
});
