import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  uname:string;
  constructor(private client:HttpClient) {

   }

  isUserLoggedIn():boolean
  {
  this.uname=localStorage.getItem("username")
    if(this.uname!=null)
      return true
    else
      return false
  }
  public getEmployees(){
    console.log("in service get employees");//headers
      return this.client.get("http://localhost:3000/users");
    }
}

export class User {
  id: number;
  name: string;
  email: string;
  constructor(userid, username, email) {
    this.id = userid;
    this.name = username;
    this.email = email;
  }
}
