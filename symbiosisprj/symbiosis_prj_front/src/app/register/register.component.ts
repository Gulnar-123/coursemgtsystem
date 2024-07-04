import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import {Register } from '../register';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: Register = new Register();
  submitted = false;
  errordata="";
constructor(private registerService: RegisterService,private router:Router) { }

  ngOnInit()
  {

  }
  newEmployee(): void {
    this.submitted = false;
  this.register = new Register();
  }

  save() {
    this.registerService.createRegister(this.register).subscribe(data => {
      console.log(data)
      this.gotoList();
   
    }, 
    error =>{ console.log(error);
      this.errordata=error;
     
    })
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
