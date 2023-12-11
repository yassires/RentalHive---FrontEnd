import { EquipementComponent } from './../equipement/equipement.component';
import { EquipementServiceService } from './../../services/equipement-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data : any[]=[]

  constructor(private equipementServiceService: EquipementServiceService ){}

  ngOnInit(): void {
    this.equipementServiceService.getData().subscribe((data)=>{
        this.data = data
    })
  }
 
}
