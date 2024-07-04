import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class AdminCourseService {
  private baseUrl = 'http://localhost:8080/project/courses';

  constructor(private http: HttpClient) { }

  
  

  createCourse(course:FormData): Observable<Object> {
   
    return this.http.post(`${this.baseUrl}`, course);
  }
  getAll() {
   
    return this.http.get<Course[]>(`${this.baseUrl}`);
  }
  deletecourse(courseid:number){
    console.log("@@@"+`${this.baseUrl}`+"/"+courseid)
    return this.http.delete(`${this.baseUrl}`+"/"+courseid)
  }
}
