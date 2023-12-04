import { Component, OnInit } from '@angular/core';
import { EquipementServiceService } from 'src/app/services/equipement-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data : any[] = [] ;


  constructor(private equipementService : EquipementServiceService){}
  ngOnInit(): void {
      this.equipementService.getData().subscribe((data)=>{
        this.data = data ;
        console.log(data) ;
      })  
  }
}
