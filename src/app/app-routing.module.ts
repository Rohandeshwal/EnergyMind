import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { AboutUsComponent } from './modules/home/component/about-us/about-us.component';
import { CareersComponent } from './modules/home/component/careers/careers.component';
import { ContactUsComponent } from './modules/home/component/contact-us/contact-us.component';
import { PageNotFoundComponent } from './modules/home/component/page-not-found/page-not-found.component';
import { CoalComponent } from './modules/home/services/coal/coal.component';
import { PetrolComponent } from './modules/home/services/petrol/petrol.component';
import { GasComponent } from './modules/home/services/gas/gas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'aboutUS', component: AboutUsComponent },
  { path: 'carrer', component: CareersComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: "services/coal", component: CoalComponent},
  { path: "services/petrol", component: PetrolComponent},
  { path: "services/gas", component: GasComponent},

  // 🚨 This must be the LAST route
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
