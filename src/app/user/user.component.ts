import { Component } from '@angular/core';
import { User, UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  usersinfo:User[];
  constructor(private service:UsersService)
  {

  }
  ngOnInit()
  {
    this.service.getEmployees().subscribe(data=>this.handleSuccessfulResponse(data))
  }
  handleSuccessfulResponse(data) {
   this.usersinfo=data;
  }
}
