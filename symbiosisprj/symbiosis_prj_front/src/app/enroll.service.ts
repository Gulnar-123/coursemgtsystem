import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enroll } from './enroll';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {
private baseUrl="http://localhost:8080/project/enroll"
  constructor(private http:HttpClient) { }
  newEnroll(en:Enroll):Observable<Enroll>
  {
    return this.http.post<Enroll>(`${this.baseUrl}`,en);
  }
}
