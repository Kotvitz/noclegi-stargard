import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web';
  @ViewChild('sideMenu') sideMenu!: ElementRef;
  @ViewChild('hamburgerMenu') hamburgerMenu!: ElementRef;

  toggleSideMenu() {
    if (this.sideMenu.nativeElement && this.hamburgerMenu.nativeElement) {
      const sideMenuElement = this.sideMenu.nativeElement as HTMLElement;
      const hamburgerMenuElement = this.hamburgerMenu.nativeElement as HTMLElement;

      sideMenuElement.style.left = sideMenuElement.style.left === '0px' ? '-400px' : '0px';

      hamburgerMenuElement.innerHTML =
        hamburgerMenuElement.innerHTML === '☰' ? '&#10006;' : '☰';
    }
  }
}
