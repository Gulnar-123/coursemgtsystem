import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  private baseUrl = 'http://localhost:8080/project/admin';

  constructor(private http: HttpClient) { }

  

  authentcate(admin: Admin): Observable<any> {
   
    return this.http.get(`${this.baseUrl}`+"/"+admin.emailid+"/"+admin.password);
  }
}
