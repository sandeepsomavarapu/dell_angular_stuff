import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, UsersService } from '../users.service';

@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.css']
})
export class GetuserComponent {
  user:any
    constructor(private aroute:ActivatedRoute,private service:UsersService)
    {

    }
    ngOnInit()
    {
     let uid=this.aroute.snapshot.params['id'];
     this.service.getUser(uid).subscribe(user=>{
      console.log(user);
      this.user=user
    })
    }
}
