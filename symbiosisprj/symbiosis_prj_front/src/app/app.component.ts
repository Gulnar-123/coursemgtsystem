import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
menuType:String='default'
  constructor(private router:Router){

  }
  ngOnInit(): void {
this.router.events.subscribe((val:any)=>{
  if(val.url)
  {
  var em=localStorage.getItem("emailid");
  console.log(em)
  if(em!=null)
  this.menuType='user';
  else
  {
    var aem=localStorage.getItem("adminemailid"); 
    if(aem!=null)
    this.menuType='admin';
    else
  this.menuType='default';
  }
  }
})
   
  }
  title = 'symbiosis_prj_front';
  loginuser=false;
logout(){
localStorage.removeItem("emailid")
this.router.navigate(['/'])

}
alogout(){
  localStorage.removeItem("adminemailid")
  this.router.navigate(['/'])
  
  }
}
