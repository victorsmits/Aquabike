import { Component } from '@angular/core';
import {AuthService} from "./auth.service";
import {AfterViewInit} from "@mobiscroll/angular-lite/src/js/frameworks/angular";
import {User} from "./Interface/Interface.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Aquabike';
  user: User;

  constructor(private auth : AuthService) {}

  ngAfterViewInit(){
    if(this.auth.getIsAuth()){
      this.user = JSON.parse(this.auth.getCurrentUser());
      console.log(this.user);
    }
  }

  logout() {
    this.auth.logout()
  }
}
