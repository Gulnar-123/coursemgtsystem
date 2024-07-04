import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdmissionComponent } from './admission/admission.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminCourseComponent } from './admin-course/admin-course.component';
import { AdminViewCoursesComponent } from './admin-view-courses/admin-view-courses.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { EnrollComponent } from './enroll/enroll.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    RegisterComponent,
    LoginComponent,
    UserhomeComponent,
    AdmissionComponent,
    AdminLoginComponent,
    AdminCourseComponent,
    AdminViewCoursesComponent,
    ViewCoursesComponent,
    EnrollComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
