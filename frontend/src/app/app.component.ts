import { Component } from '@angular/core';
import {AuthService} from "./auth.service";
import {AfterViewInit} from "@mobiscroll/angular-lite/src/js/frameworks/angular";
import {User} from "./Interface/Interface.module";

//@todo auto update login btn
//@todo graphical responsivity for devices

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Aquabike';
  user: User;
  private isAuth: boolean;

  constructor(private auth : AuthService) {}

  ngAfterViewInit(){
    if(this.auth.getIsAuth()){
      this.user = this.auth.getCurrentUser();
      this.isAuth = this.auth.getIsAuth();
      console.log(this.user);
    }
  }

  logout() {
    this.auth.logout()
  }
}
