import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { GetuserComponent } from './getuser/getuser.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"users",component:UserComponent},
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"emps",component:EmployeeComponent},
{path:"updateuser",component:UpdateuserComponent},
{path:"adduser",component:AdduserComponent},
{path:"getuser/:id",component:GetuserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
