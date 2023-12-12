import { Component, OnInit } from '@angular/core';
import { DemandeService } from 'src/app/services/Demande/demande.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  private data : any [] = [] ;

  constructor(private demandeService : DemandeService){}
  ngOnInit(): void {
    this.demandeService.getDeamndes().subscribe((data)=>{
      this.data = data ; 
    })
  }
}
