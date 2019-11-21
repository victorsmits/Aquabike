import {AfterViewInit, Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

//todo display login error

@Component({
  selector: 'app-login', // --> can be ommited because of the routes
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit{

  isLoading = false;
  private Error: any;

  constructor(public authService: AuthService,
              private router : Router) { }

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
