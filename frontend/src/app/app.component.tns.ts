import {Component, OnInit} from '@angular/core';
import {AuthService} from "./service/auth.service";
import {AfterViewInit} from "@mobiscroll/angular-lite/src/js/frameworks/angular";
import {User} from "./Interface/Interface.module";
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {ToolService} from './service/tool.service';

//TODO graphical responsive for devices

@Component({
  selector: 'app-root',
  templateUrl: './app.component.tns.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'Aquabike';
  public user: User;
  public isAuth: boolean;
  public isHandset$ = this.tool.isHandset$;

  constructor(private auth : AuthService,
              private router : Router,
              private tool : ToolService) {}

  ngOnInit(){
    this.auth.getAuthStatusListener().subscribe(
      auth=>{
        if(auth){
          this.isAuth = this.auth.getIsAuth();
          this.user = this.auth.getCurrentUser();
        }
      });
    if(this.auth.getIsAuth()){
      this.isAuth = this.auth.getIsAuth();
      this.user = this.auth.getCurrentUser();
    }
  }

  ngAfterViewInit(){
    this.ngOnInit();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
    this.isAuth = false
  }
}
