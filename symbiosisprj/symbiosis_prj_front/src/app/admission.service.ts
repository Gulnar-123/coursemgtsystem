import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {
  private baseUrl = 'http://localhost:8080/project/admissions';

  constructor(private http: HttpClient) { }

  
  

  createAdmission(admission: Object): Observable<any> {
   
    return this.http.post(`${this.baseUrl}`, admission);
  }
  getAll(): Observable<any> {
   
    return this.http.get(`${this.baseUrl}`);
  }
}
