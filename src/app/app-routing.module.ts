import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EquipementComponent } from './components/equipement/equipement.component';
import { InfoComponent } from './components/info/info.component';

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
    path : 'info', 
    component : InfoComponent, 
    title : 'Info Page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
