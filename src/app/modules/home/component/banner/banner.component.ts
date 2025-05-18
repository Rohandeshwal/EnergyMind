import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-banner',
  standalone: false,
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements AfterViewInit {
  @ViewChild('heroCarousel', { static: true }) heroCarousel!: ElementRef;

  ngAfterViewInit(): void {
    AOS.init(); 
    this.heroCarousel.nativeElement.addEventListener('slid.bs.carousel', () => {
      AOS.refresh();
    });
  }
}
