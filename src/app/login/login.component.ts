import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  orgName!: string;
  constructor(private router: Router) {
    console.log("am in constructor...")
  }
  ngOnInit()
  {
    this.orgName="DELL";
  console.log("am from ngoninit hook")
  }
  ngOnDestroy()
  {
    console.log("destroyed.....")
  }
  validate(login: NgForm) {
    let uname = login.value.uname;
    let password = login.value.pswd;
    if (uname == "dell" && password == "dell123") {
      alert("LOGIN SUCCESS")
      localStorage.setItem("username",uname)
      this.router.navigate(['emps']);
    }
    else {
      alert("Please Enter valid credentials")
    }
  }

}
