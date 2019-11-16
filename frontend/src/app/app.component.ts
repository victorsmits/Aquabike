import {Component, OnInit} from '@angular/core';
import {AuthService} from "./service/auth.service";
import {AfterViewInit} from "@mobiscroll/angular-lite/src/js/frameworks/angular";
import {User} from "./Interface/Interface.module";
import {Router} from '@angular/router';

//TODO auto update login btn
//TODO graphical responsive for devices

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'Aquabike';
  user: User;
  private isAuth: boolean;

  constructor(private auth : AuthService,
              private router : Router) {}

  ngOnInit(){
    if(this.auth.getIsAuth()){
      this.user = this.auth.getCurrentUser();
      this.isAuth = this.auth.getIsAuth();
    }
  }

  ngAfterViewInit(){
    this.auth.getAuthStatusListener().subscribe(auth=>{
      this.isAuth = this.auth.getIsAuth();
      if(this.isAuth){
        this.user = this.auth.getCurrentUser();
      }
    })
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('')
  }
}
