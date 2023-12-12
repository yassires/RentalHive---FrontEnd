import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EquipementComponent } from './components/equipement/equipement.component';
import { InfoComponent } from './components/info/info.component';
import { DevisComponent } from './components/devis/devis.component';
import { DemandeComponent } from './components/demande/demande.component';

const routes: Routes = [
  {
    path : '', 
    component : HomeComponent, 
    title : 'Home Page'
  }, 
  {
    path : 'equipements', 
    component : EquipementComponent, 
    title : 'Equipement Page'
  }, 
  {
    path : 'devis', 
    component : DevisComponent, 
    title : 'Devis Page'
  }, 
  {
    path : 'demande', 
    component : DemandeComponent, 
    title : 'Demande Page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
