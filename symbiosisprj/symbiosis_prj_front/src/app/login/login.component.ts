import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Register } from '../register';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  register: Register = new Register();
  submitted = false;
  errordata="";
  invalid=false;
constructor(private registerService: RegisterService,private router:Router) { }

  ngOnInit()
  {

  }
  newEmployee(): void {
    this.submitted = false;
  this.register = new Register();
  }

  login() {
    this.registerService.authentcate(this.register).subscribe(data => {
      console.log(data)
      if(data!=null)
      {
        localStorage.setItem("emailid",this.register.emailid);
       console.log(data)
    
      this.router.navigate(['/userhome']);
      }
      else
      {
        this.invalid=true;
      this.router.navigate(['login']);
      }
   
    }, 
    error =>{ console.log(error);
      this.errordata=error;
     
    })
  }

  onSubmit() {
    this.login();    
    this.submitted = true;
    console.log("inside on submit")
  }

  gotoList() {
    this.router.navigate(['/home']);
  }

}
