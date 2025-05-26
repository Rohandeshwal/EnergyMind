import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone:false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit, AfterViewInit {

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