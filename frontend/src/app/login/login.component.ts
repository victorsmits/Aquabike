import {AfterViewInit, Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import {Router} from '@angular/router';

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
    this.authService.getAuthStatusListener().subscribe(
      auth => {
        if(auth === true){
          this.router.navigate([''])
        }
      },
      error =>{
        console.log(error);
        this.Error = error;
      });
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.loginUser(form.value.username, form.value.password);
    this.authService.getAuthStatusListener().subscribe(
      auth => {
        if(auth === true){
          this.router.navigate([''])
        }
      },
      error =>{
        console.log(error);
        this.Error = error;
      });
  }

}
