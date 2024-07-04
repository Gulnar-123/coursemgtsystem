import { formatDate } from '@angular/common';
import * as core from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AdminCourseService } from '../admin-course.service';
import { Course } from '../course';
import { FileHandle } from '../File-Handle';

@core.Component({
  selector: 'app-admin-course',
  templateUrl: './admin-course.component.html',
  styleUrls: ['./admin-course.component.css']
})
export class AdminCourseComponent {
  course: Course = new Course();
  submitted = false;
  errordata="";
constructor(private courseService: AdminCourseService,private router:Router,private sanitizer:DomSanitizer) { }

  ngOnInit()
  {

  }
  newEmployee(): void {
    this.submitted = false;
  this.course = new Course();
  }

  save() {
    
    const formData=this.prepareFormData(this.course);
    this.courseService.createCourse(formData).subscribe(data => {
      console.log(data)
      this.gotoList();
   
    }, 
    error =>{ console.log(error);
      this.errordata=error;
     
    })
  }
  prepareFormData(course:Course):FormData{
    const formData=new FormData()
    formData.append(
      'course',
      new Blob([JSON.stringify(course)],{type:"application/json"})
    );
    for(var i=0;i<course.courseImages.length;i++)
    {
      formData.append(
        'imageFile',
        course.courseImages[i].file,
        course.courseImages[i].file.name
      );
    }
    return formData;
  }
  removeImage(i:number)
  {
    this.course.courseImages.splice(i,1)
  }
  onFileSelected(event:any){
    if(event.target.files)
    {
const file=event.target.files[0];
const fileHandle:FileHandle={
  file:file,
  url:this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file)),
  name:file.name


}
this.course.courseImages.push(fileHandle)
    }
  }
  onSubmit() {
    this.save();    
    this.submitted = true;
    console.log("inside on submit")
  }

  gotoList() {
    this.router.navigate(['/home']);
  }


}
