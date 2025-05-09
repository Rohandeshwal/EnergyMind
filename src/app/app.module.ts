import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // ✅ Only this, NOT CommonModule
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './modules/home/home.module';



@NgModule({
    declarations: [AppComponent],

  imports: [
    BrowserModule,              // ✅ Required in root

    HomeModule,
    AppRoutingModule, 
     ],  

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
