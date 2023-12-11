import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environments';

@Injectable({
  providedIn: 'root'
})

export class DevisServiceService {

  private devisUrl = environment.devisUrl ;

  constructor(private http : HttpClient) { }

  getDevis():Observable<any>{
    return this.http.get(`${this.devisUrl}`)
  }

  

  showDevis(id : number): Observable<any> {
    return this.http.get(`${this.devisUrl}showAll/${id}`)
  }

  updateStatus(id :number) : Observable <any> {
    return this.http.delete(`${this.devisUrl}updateStatus/${id}`) ;
  } 

  updateDevis(id: number, data: any): Observable<any> {
    return this.http.put(`${this.devisUrl}updateDevis/${id}`, data);
  }


}
