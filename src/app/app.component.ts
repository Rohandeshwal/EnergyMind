import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent implements OnInit, AfterViewInit {
    title = 'energyMind';
  ngOnInit(): void {
    AOS.init({
      duration: 1000,  
      once: true       
    });
  }

  ngAfterViewInit(): void {
    AOS.refresh();  
  }
}