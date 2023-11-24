import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web';
  imageFilenames = ['IMG_3902.jpeg', 'IMG_3903.jpeg', 'IMG_3907.jpeg', 'IMG_3908.jpeg', 'IMG_3913.jpeg', 'IMG_3922.jpeg', 'IMG_3925.jpeg', 'IMG_3928.jpeg']
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

  openGalleryImage(imageUrl: string): void {
    window.open(imageUrl, '_blank');
  }

  getRoute(): void {
    const destinationAddress = 'NOCLEGI+STARGARD+SYLWIA+KREKORA';
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const currentLocation = `${position.coords.latitude},${position.coords.longitude}`;
        const mapsUrl = `https://www.google.com/maps/dir/${currentLocation}/${destinationAddress}`;
        window.open(mapsUrl, '_blank');
      },
      (error) => {
        console.error('Error getting current location:', error);
      }
    )
  }
}
