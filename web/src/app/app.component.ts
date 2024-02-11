import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web';
  imageFilenames = ['IMG_3928.jpeg', 'IMG_3902.jpeg', 'IMG_3907.jpeg', 'IMG_3908.jpeg', 'IMG_3903.jpeg', 'IMG_3913.jpeg', 'IMG_4280.jpeg', 'IMG_4281.jpeg',
  'IMG_3925.jpeg', 'IMG_3780.jpeg']

  toggleSideMenu() {
    const sideMenuElement = document.querySelector('.side-menu') as HTMLElement;
    const hamburgerMenuElement = document.querySelector('.menu-icon') as HTMLElement;
  
    if (sideMenuElement && hamburgerMenuElement) {
      const isOpen = sideMenuElement.style.left === '0px';
  
      sideMenuElement.style.left = isOpen ? '-400px' : '0px';
      hamburgerMenuElement.innerHTML = isOpen ? '&#9776;' : '&#10006;';
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

  makePhoneCall(): void {
    const phoneNumber = '+48-516-628-015';
    const telUri = `tel:${phoneNumber}`;
    window.open(telUri, '_self');
  }
}
