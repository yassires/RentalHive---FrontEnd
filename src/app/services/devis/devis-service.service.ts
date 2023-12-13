import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environments';

@Injectable({
  providedIn: 'root'
})

export class DevisServiceService {

  devisId : number = 0;

  constructor(private http : HttpClient) { }

  getDevis():Observable<any>{
    return this.http.get(`${environment.devisUrl}`)
  }
  showDevis(id : number): Observable<any> {
    return this.http.get(`${environment.devisUrl}showAll/${id}`)
  }

  updateStatus(status: string, id: number): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const options = { headers };
    return this.http.post(`${environment.devisUrl}updateStatus/${id}`, status,options);
    
  }

  updateDevis(id: number, data: any): Observable<any> {
    return this.http.post(`${environment.devisUrl}updateDevis/${id}`, data);
  }

  setDevisId(id: number){
    this.devisId = id;
  }

  getDevisId(){
    return this.devisId;
  }
}
