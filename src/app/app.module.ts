import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { EquipementComponent } from './components/equipement/equipement.component';
import { NavComponent } from './components/nav/nav.component';
import { DevisComponent } from './components/devis/devis.component';
import { HeroComponent } from './components/hero/hero.component';
import { DemandeComponent } from './components/demande/demande.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    EquipementComponent,
    NavComponent,
    DevisComponent, 
    HeroComponent, DemandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
