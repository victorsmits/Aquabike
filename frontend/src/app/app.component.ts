import { Component } from '@angular/core';
import {AuthService} from "./auth.service";
import {AfterViewInit} from "@mobiscroll/angular-lite/src/js/frameworks/angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Aquabike';
  user;

  constructor(private auth : AuthService) {}

  ngAfterViewInit(){
    this.user = this.auth.getCurrentUser();
  }

  logout() {
    this.auth.logout()
  }
}
