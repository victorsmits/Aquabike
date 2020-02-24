import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ApiService} from '../service/api.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  isLoading: boolean;
  Error: String;
  private user: number;

  constructor(public api : ApiService,
              public router : Router,
              public actiRoute : ActivatedRoute) { }

  ngOnInit() {
    this.actiRoute.params.subscribe(params => {
        this.user = Number (params['id']);
    });
  }

  reset(resetpwd: NgForm) {
    this.isLoading = true;
    if(resetpwd.value.pwd === resetpwd.value.confpwd){
      this.api.resetPwd({id : this.user,password : resetpwd.value.pwd}).subscribe(url=>{
        if(url["result"]){
          this.router.navigate(["/login"]);
        }
      },error => {
        this.Error = error;
        this.isLoading = false;
      })
    }else{
      this.Error="mot de passe et confirmation du mot de passe doivent être identique";
      this.isLoading = false;
    }

  }
}
