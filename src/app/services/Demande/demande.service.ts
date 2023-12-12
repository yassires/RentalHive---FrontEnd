import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  private apiUrl = environment.baseUrl ;
  constructor( private http : HttpClient) { }

  getDeamndes() : Observable <any>
  {
    return this.http.get(`${this.apiUrl}demandes`) ;
  }
}
