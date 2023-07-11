import { Component } from '@angular/core';
import { User, UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  usersinfo: User[];
  constructor(private router:Router ,private activatedroute:ActivatedRoute, private service: UsersService) {

  }
  ngOnInit() {
    console.log(this.activatedroute);

    this.service.getUsers().subscribe(data => this.processUsers(data))
   // console.log(this.activatedroute.snapshot.paramMap.get('ename'))
   // console.log(this.activatedroute.snapshot.queryParamMap.get('ename'))
   
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
update(user:User) {
    this.service.update(user)
    this.router.navigate(['/updateuser'])  
  }
}
