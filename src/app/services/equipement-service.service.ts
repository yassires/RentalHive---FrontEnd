import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

import {environment} from "../environments/environments" ;

@Injectable({
  providedIn: 'root'
})
export class EquipementServiceService {

  private baseUrl = environment.baseUrl ;
  private apiUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }

  getData() : Observable<any> {
    return this.http.get(`${this.apiUrl}`) 
  }
  
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
