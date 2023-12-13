import { Component, OnInit } from '@angular/core';
import {DevisServiceService} from "../../services/devis/devis-service.service";


@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit{
  devis: any | undefined;
  selectedDevisId: number = 0;



  constructor(private _devisService: DevisServiceService) {
  }

  ngOnInit(): void {
    this._devisService.getDevis().subscribe(
          data => {this.devis = data
          console.log(data);
          },
        );
  }

  test(devisId: number) {
    this._devisService.setDevisId(devisId)
  }

}
