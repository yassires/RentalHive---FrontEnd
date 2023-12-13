import { Component, Input, OnInit } from '@angular/core';
import { DevisServiceService } from 'src/app/services/devis/devis-service.service';

@Component({
  selector: 'app-devis-modal',
  templateUrl: './devis-modal.component.html',
  styleUrls: ['./devis-modal.component.css']
})
export class DevisModalComponent implements OnInit{

  @Input() selectedDevisId: number = 0;


  devisId : number = 0;
  selectedStatus : string = "";
  discount : number = 0;

  constructor(private devisService : DevisServiceService){

  }

  ngOnInit() {
    console.log(this.selectedDevisId);
  }
  
  updateStatus(): void{
    console.log(this.selectedStatus);
    
    this.devisId = this.devisService.getDevisId();
    this.devisService.updateStatus(this.selectedStatus, this.devisId).subscribe(
      data => console.log(data)
      
    )
  }

  updateDiscount(): void{
    this.devisId = this.devisService.getDevisId();
    console.log("dicount = ", this.devisId);
  }






}
