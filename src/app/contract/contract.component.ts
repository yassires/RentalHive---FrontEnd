import { Component } from '@angular/core';
import { ContractService } from '../services/contract/contract.service'

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent {
  constructor(private contractService: ContractService) { }

  downloadContract() {
    this.contractService.generateContract().subscribe(
      (data: ArrayBuffer) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      error => {
        console.error('Error downloading contract PDF', error);
      }
    );
  }
}
