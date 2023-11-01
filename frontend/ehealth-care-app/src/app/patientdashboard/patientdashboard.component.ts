import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientdashboard',
  templateUrl: './patientdashboard.component.html',
  styleUrls: ['./patientdashboard.component.css']
})
export class PatientdashboardComponent implements OnInit {

  emailid:string ="";
  constructor(public router:Router) {
    
  }

  ngOnInit(): void {
      let obj = sessionStorage.getItem("emailid");
      if(obj!=null) {
        this.emailid=obj;
      }
  }

  logout() {
    sessionStorage.removeItem("emailid");
    this.router.navigate(["login"]);
  }

}
