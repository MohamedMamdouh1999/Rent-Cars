import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private viewportScroller: ViewportScroller) {};

  @HostListener('window: scroll', ['$event'])
  @HostListener('window: resize', ['$event'])
  
  onWindowScroll(): string {
    if (window.scrollY > 59 || window.innerWidth < 992) return 'bg-white mt-0';
    else return 'bg-transparent';
  }

  goToSection(id: string): void {
    this.viewportScroller.scrollToAnchor(id);
  }
}
