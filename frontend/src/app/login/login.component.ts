import {AfterViewInit, Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import {Router} from '@angular/router';
import {ToolService} from '../service/tool.service';

//todo display login error

@Component({
  selector: 'app-login', // --> can be ommited because of the routes
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit{

  isLoading = false;
  public Error: any;
  public isHandset$ = this.tool.isHandset$;

  constructor(public authService: AuthService,
              public router : Router,
              private tool : ToolService) { }

  ngOnInit(){}

  ngAfterViewInit(): void {
    this.authService.getAuthStatusListener()
    .subscribe(
      auth => {
        if(auth){
          this.router.navigate([''])
        }
        this.authService.getErrorListener().subscribe(next=>{
          this.Error = next;
          this.isLoading = true;
        },error => {
          this.Error = error;
        });
      }
    );
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.loginUser(form.value.username, form.value.password);
    this.ngAfterViewInit();
  }

}
