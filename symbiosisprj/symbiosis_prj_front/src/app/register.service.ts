import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl = 'http://localhost:8080/project/users';

  constructor(private http: HttpClient) { }

  

  createRegister(register: Object): Observable<Object> {
   
    return this.http.post(`${this.baseUrl}`, register);
  }
  authentcate(register: Register): Observable<Object> {
   
    return this.http.get(`${this.baseUrl}`+"/"+register.emailid+"/"+register.password);
  }
}