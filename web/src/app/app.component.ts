import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web';
  imageFilenames = ['IMG_3928', 'IMG_3902', 'IMG_3907', 'IMG_3908', 'IMG_3903', 'IMG_3913', 'IMG_4280', 'IMG_4281', 'IMG_3925', 'IMG_3780']

  toggleSideMenu() {
    const sideMenuElement = document.querySelector('.side-menu') as HTMLElement;
    const hamburgerMenuElement = document.querySelector('.menu-icon') as HTMLElement;
  
    if (sideMenuElement && hamburgerMenuElement) {
      const isOpen = sideMenuElement.style.left === '0px';
  
      sideMenuElement.style.left = isOpen ? '-400px' : '0px';
      hamburgerMenuElement.innerHTML = isOpen ? '&#9776;' : '&#10006;';
    }
  }

  openGalleryImage(filename: string): void {
    const webpSupported = this.browserSupportsWebP();
    const imageExtension = webpSupported ? 'webp' : 'jpg';
    const imageUrl = `assets/images/${filename}.${imageExtension}`;
    window.open(imageUrl, '_blank');
  }
  
  browserSupportsWebP(): boolean {
    const elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d') && elem.toDataURL('image/webp').indexOf('data:image/webp') === 0);
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
