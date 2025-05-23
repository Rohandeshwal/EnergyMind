import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const navbar = this.el.nativeElement.querySelector('.navbar');

    if (scrollTop <= 40) {
      this.renderer.setStyle(navbar, 'box-shadow', 'none');
    } else {
      this.renderer.setStyle(navbar, 'box-shadow', '0px 5px 15px rgba(0, 0, 0, 0.3)');
    }
  }
}
