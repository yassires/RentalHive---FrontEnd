import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipementServiceService {

  private baseUrl = 'localhost:8000/equipement' ;
  constructor(private http : HttpClient) { }

  getEquipements() : Observable<any> {
    return this.http.get(`${this.baseUrl}`) 
  }

  getEquipementById(id : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  deleteEquipement(id :number) : Observable <any> {
    return this.http.delete(`${this.baseUrl}/${id}`) ;
  } 

  updateEquipement(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

}
