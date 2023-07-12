import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate() {
    let uname=localStorage.getItem("username");
    if(uname=="admin")
      return true;
    else
    alert("You Are Restricted To Access This Route")
    return false;
  }
  
}
