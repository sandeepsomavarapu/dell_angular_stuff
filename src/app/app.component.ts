import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'dell',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  orgName:string="Dell India"
  constructor(private service:UsersService)
  { }
  checkLogin():boolean
  {
    return this.service.isUserLoggedIn()
  }
  Logout()
  {
    localStorage.removeItem("username");
    alert("Logged Out Successfully ")
  }

}
