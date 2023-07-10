import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  uname: string;
  userToUpdate: User;
  constructor(private client: HttpClient) {

  }

  isUserLoggedIn(): boolean {
    this.uname = localStorage.getItem("username")
    if (this.uname != null)
      return true
    else
      return false
  }
  public getUsers() {
    console.log("in service get employees");//headers
    return this.client.get("http://localhost:3000/users");
  }
  public deleteUser(uid) {
    console.log("Deleting User....." + uid);//headers
    return this.client.delete("http://localhost:3000/users/" + uid);
  }
  public addUser(user:User) {
    console.log("Adding User....." + user);//headers
     return this.client.post("http://localhost:3000/users",user);
  }
  public updateUserInServer(user:User) {
    console.log("Updating User....." + user);//headers
    let user1=new User(user.id,user.name,user.email);
    console.log(user1.id)
     return this.client.put("http://localhost:3000/users/"+user1.id,user1);
  }
  public updateUser(user:User) {
    console.log(user)
    this.userToUpdate=user;
  }
  public getUserToUpdate()
  {
    console.log("get user "+this.userToUpdate)
    return this.userToUpdate;
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
