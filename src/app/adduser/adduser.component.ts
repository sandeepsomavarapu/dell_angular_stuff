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
    console.log(user);
     this.service.addUser(user).subscribe(data => {
      alert("employee added successfully"+data);
      this.router.navigate(['/users']);
    });
  }
}
