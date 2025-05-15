import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';

import { AboutUsComponent } from './component/about-us/about-us.component';
import { CareersComponent } from './component/careers/careers.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { BannerComponent } from './component/banner/banner.component';
import { MainBannerComponent } from "./component/main-banner/main-banner.component";
import { CoalComponent } from './services/coal/coal.component';
import { PetrolComponent } from './services/petrol/petrol.component';
import { GasComponent } from './services/gas/gas.component';


@NgModule({
  declarations: [HomeComponent,CoalComponent,PetrolComponent,GasComponent, MainBannerComponent, HeaderComponent, FooterComponent, MainBannerComponent,AboutUsComponent, CareersComponent, ContactUsComponent, BannerComponent], // ✅ Declare HomeComponent so it can be used in this module
  imports: [
    CommonModule,
    RouterModule,
   
],
  exports: [HomeComponent], 
})
export class HomeModule { }
