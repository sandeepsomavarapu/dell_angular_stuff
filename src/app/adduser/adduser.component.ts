import { Component } from '@angular/core';
import { User, UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {

  constructor(private router:Router, private service:UsersService)
  {

  }
  
  onSubmit(user:User):any{
    console.log(user.name);
     this.service.addUser(user).subscribe(data => {
      alert("employee added successfully"+data);
      this.router.navigate(['/users',{eid:123,ename:"sandeep"}],{queryParams:{eid:222,ename:"dell"}});
    });
  }
}
