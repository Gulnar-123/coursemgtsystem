import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminLoginService } from '../admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
admin:Admin=new Admin()
submitted:boolean=false
constructor(private adminservice:AdminLoginService,private route:Router)
{

}
login() {
  this.adminservice.authentcate(this.admin).subscribe(data => {
    console.log(data)
    if(data!=null)
    {
      localStorage.setItem("adminemailid",this.admin.emailid);
     console.log(data)
  
    this.route.navigate(['/userhome']);
    }
    else
    {
     
    this.route.navigate(['admin-login']);
    }
 
  }, 
  error =>{ console.log(error);
   
   
  })
}

onSubmit() {
  this.login();    
  this.submitted = true;
  console.log("inside on submit")
}

gotoList() {
  this.route.navigate(['/home']);
}

}
