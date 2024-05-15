import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @HostListener('window: scroll', ['$event'])
  
  onWindowScroll(): string {
    if (window.scrollY > 59) return 'bg-white mt-0';
    else return 'bg-transparent';
  }
}
