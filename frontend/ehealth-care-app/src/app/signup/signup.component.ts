import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  msg:string = "";
  constructor(public loginService:LoginService,
    public router:Router) {

  }

  loginRef = new FormGroup({
    firstname:new FormControl(),
    lastname:new FormControl(),
    emailid:new FormControl(),
    password:new FormControl(),
    accounttype:new FormControl(),
  });

  signUp(): void {
    console.log("event fired")
    let loginData = this.loginRef.value;
    console.log(loginData);
    this.loginService.signUp(loginData).subscribe({
      next:(result:any)=>{
        
        this.msg=result;

      },
      error:(error:any)=> {
        console.log(error)
      },
      complete:()=> {
        console.log("complete!")
      }
    }),
    this.loginRef.reset();
  }

}
