import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  [x: string]: any;
  loginRef!:FormGroup;
  msg:string = "";
  constructor(public formBuilder:FormBuilder, public authService:AuthService
    , public router:Router) {}

    ngOnInit(): void {
        this.loginRef=this.formBuilder.group({
          emailid:[''],
          password:[''],
          accounttype:[''],
        });
    }

signIn(): void {
    console.log("event fired")
    let loginData = this.loginRef.value;
    console.log(loginData);
    this.authService.signIn(loginData).subscribe({
        next: (result: any) => {
            if (result === "Admin login success") {
                this.router.navigate((["adminhome"]));
                // this.msg=result;
            } else if (result === "Patient login successful") {
                sessionStorage.setItem("user", JSON.stringify(loginData));
                this.router.navigate((["patienthome"]));
                // this.msg=result;
            } else {
                this.msg = result;
            }
        },
        error: (error: any) => {
            console.log(error);
        },
        complete: () => {
            console.log("complete!");
        }
    });

    this.loginRef.reset();
}


  // signIn(){
  //   let users = this.loginRef.value; 
  //   this.authService.signIn(users).subscribe({
  //     next:(data:any)=> {
  //         console.log(data);
  //         if(data === "success"){
  //           alert("successfully login!")
  //  sessionStorage.setItem("user",JSON.stringify(users));   // stroring in session storage and converting in string. 
  //           this.router.navigate(["home"]);
  //         }else {
  //           alert("failure try once again");
  //         this.msg = "Invalid emailid or password";
  //         }
  //       },
  //     error:(error:any)=> {
  //         console.log(error)
  
  //     },
  //     complete:()=> {
  //         console.log("login done!")
  //     }
  //   })
  //   this.loginRef.reset();
  // }

}
