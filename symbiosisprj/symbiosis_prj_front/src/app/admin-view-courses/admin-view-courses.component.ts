import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminCourseService } from '../admin-course.service';
import { Course } from '../course';

@Component({
  selector: 'app-admin-view-courses',
  templateUrl: './admin-view-courses.component.html',
  styleUrls: ['./admin-view-courses.component.css']
})
export class AdminViewCoursesComponent implements OnInit {
   courses:Course[]=[]

  constructor(private courseService:AdminCourseService){

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
  }
deletecourse(id:number)
{
  console.log("****"+id)
  this.courseService.deletecourse(id).subscribe((response)=>{
    console.log(response)
    this.getAllCourses();
  },(error)=>{
    console.log(error)
  })


}
showdetails(c:Course)
{
 console.log(c);
   console.log("****"+c.courseImages[0].url);
}
}
