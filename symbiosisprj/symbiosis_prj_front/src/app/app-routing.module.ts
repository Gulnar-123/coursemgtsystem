import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCourseComponent } from './admin-course/admin-course.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminViewCoursesComponent } from './admin-view-courses/admin-view-courses.component';
import { CoursesComponent } from './courses/courses.component';
import { EnrollComponent } from './enroll/enroll.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';

const routes: Routes = [{path:'',redirectTo:'home',pathMatch:'full'},
{path:'courses',component:ViewCoursesComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},{path:'home',component:HomeComponent},{path:'userhome',component:UserhomeComponent},
{path:'admin-login',component:AdminLoginComponent},
{path:'admin-course',component:AdminCourseComponent},
{path:'admin-view-course',component:AdminViewCoursesComponent},
{'path':'enroll/:id',component:EnrollComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
