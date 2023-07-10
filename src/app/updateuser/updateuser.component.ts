import { Component } from '@angular/core';
import { User, UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {
  uid:number;

  constructor(private router:Router, private service:UsersService)
  {

  }
  ngOnInit()
  {
    this.uid=this.service.getUserToUpdate().id;
    console.log("oninit ..."+this.uid)
  }

  onUpdate(userData:User)
  {
    //userData.id=this.uid;
    console.log(userData)
    this.service.updateUserInServer(userData);
    this.router.navigate(['/users'])
  }
}
