import { Component } from '@angular/core';
import { User, UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  usersinfo: User[];
  constructor(private router:Router ,private service: UsersService) {

  }
  ngOnInit() {
    this.service.getUsers().subscribe(data => this.processUsers(data))
  }
  processUsers(data) {
    this.usersinfo = data;
  }
  deleteUser(user){
      var selction= confirm("Are you sure !!")
  if(selction==true){
     this.usersinfo.splice(this.usersinfo.indexOf(user), 1);
   this.service.deleteUser(user.id).subscribe(data => {
     alert("Deleted Successfully");
   });}
this.router.navigate(['/users']);
}
  updateUser(user) {
    this.service.updateUser(user)
    this.router.navigate(['/updateuser'])  
  }
}
