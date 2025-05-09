import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { AboutUsComponent } from './modules/home/component/about-us/about-us.component';
import { CareersComponent } from './modules/home/component/careers/careers.component';
import { ContactUsComponent } from './modules/home/component/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
   { path: "home", component: HomeComponent},
    { path: "aboutUS", component: AboutUsComponent},
    { path: "carrer", component: CareersComponent},
    { path: "contactUs", component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
