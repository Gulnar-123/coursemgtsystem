
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminCourseService } from '../admin-course.service';
import { Course } from '../course';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent  implements OnInit {
  courses:Course[]=[]
login=false
 constructor(private courseService:AdminCourseService,private router:Router){

 }
 getAllCourses()
 {

   this.courseService.getAll().subscribe((response:Course[])=>{
     console.log(response)
     this.courses=response
   },
   
   (error:HttpErrorResponse)=>{
     console.log(error)
    });
 }
 ngOnInit(): void {
   this.getAllCourses()
   console.log(localStorage.getItem("emailid"))
   if(localStorage.getItem("emailid")!=null)
    this.login=true
 }

enroll(id:any)
{
this.router.navigate(["enroll",id])
}
}