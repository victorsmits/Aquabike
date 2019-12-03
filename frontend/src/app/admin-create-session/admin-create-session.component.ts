import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {NgxMaterialTimepickerTheme} from "ngx-material-timepicker";
import {Sessions} from "../Interface/Interface.module";
import {ApiService} from "../service/api.service";
import {Router} from '@angular/router';
import {delay} from 'rxjs/operators';

//todo display create error

@Component({
  selector: 'app-admin-create-session',
  templateUrl: './admin-create-session.component.html',
  styleUrls: ['./admin-create-session.component.css']
})
export class AdminCreateSessionComponent implements OnInit {
  private error: any;

  darkTheme: NgxMaterialTimepickerTheme = {
    container: {
      bodyBackgroundColor: '#424242',
      buttonColor: '#fff'
    },
    dial: {
      dialBackgroundColor: '#555',
    },
    clockFace: {
      clockFaceBackgroundColor: '#555',
      clockHandColor: '#9fbd90',
      clockFaceTimeInactiveColor: '#fff'
    }
  };

  constructor(private api: ApiService,
              private router : Router) { }

  ngOnInit() {
    // this.generateSession(5);
  }

  onCreate(form: NgForm) {
    let d = new Date(form.value.date);
    let newSess : Sessions ={
      Date : d.toDateString(),
      Time : form.value.time,
      Bike : form.value.bike,
      Cancel : false,
      Id : 0
    };

    this.api.createNewSess(newSess).subscribe(urldata=>{
      if(urldata['result']){
        this.router.navigate(['admin/session'])
      }
    },error =>{
      this.error = error
    } );
  }

  //todo pop up to confirm 5 years generation
  //todo generation en fonction du type de session
  generateSession(year : number){
    this.api.postGenerateSessionAuto(year,9).subscribe(urldata=>{
      if(urldata['result']){
        this.router.navigate(['admin/session'])
      }
    },error =>{
      this.error = error
    } );
  }

}
