
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminCourseService } from '../admin-course.service';
import { Course } from '../course';
import { Enroll } from '../enroll';
import { EnrollService } from '../enroll.service';
@Component({
  selector: 'app-enroll',
  
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent  implements OnInit{
  id:any;
 en:Enroll=new Enroll()
  constructor(private es:EnrollService,private router:Router,private route:ActivatedRoute)
  {
  
  }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.en.courseid=this.id
      }
      submitdata()
      {
        this.en.emailid=localStorage.getItem("emailid")
        this.es.newEnroll(this.en).subscribe((data:Enroll)=>{
          if(data!=null)
          {
            alert('Thank you for enrolling')
          }
        })
      }
}
