import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private auth : AuthService,
              private router : Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if( this.auth.getIsAuth() && this.auth.getCurrentUser().Role[0] === "ROLE_ADMIN" ){
      return true;
    }else{
      return this.router.navigate(['/login'])
    }
  }

}
