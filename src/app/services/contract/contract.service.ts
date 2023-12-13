import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private apiUrl = environment.contractUrl;

  constructor(private http: HttpClient) { }

  generateContract(): Observable<ArrayBuffer> {
    return this.http.get(this.apiUrl, { responseType: 'arraybuffer' });
  }
}
