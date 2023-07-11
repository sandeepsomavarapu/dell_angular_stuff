import { Component } from '@angular/core';
import { User, UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {
  uid:number;
  user:User;
  constructor(private router:Router,private activatedRoute:ActivatedRoute, private service:UsersService)
  {

  }
  ngOnInit()
  {
    this.uid=this.activatedRoute.snapshot.params['id']
    //this.uid=this.service.getUserToUpdate().id;
    console.log("oninit ..."+this.uid)
   //this.service.getUser(this.uid).subscribe(user1=>{this.user=user1});
  }

  onUpdate(userData:User)
  {
    return this.service.onUpdate(userData).subscribe(data => {
      alert(data)
      this.router.navigate(['/users'])
});
}
  }