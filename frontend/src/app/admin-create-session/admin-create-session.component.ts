import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {NgxMaterialTimepickerTheme} from "ngx-material-timepicker";
import {Sessions} from "../Interface/Interface.module";
import {ApiService} from "../service/api.service";
import {Router} from '@angular/router';

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
  }

  onCreate(form: NgForm) {
    let newSess: Sessions;
    let d = new Date(form.value.date);
    newSess={
      Date : d.toDateString(),
      Time : form.value.time,
      Bike : form.value.bike,
      Cancel : false,
      Id : 0
    };

    this.api.createNewSess(newSess).subscribe(urldata=>{
      if(urldata['result']){
        this.router.navigate(['admin/Session'])
      }
    },error =>{
      this.error = error
    } );
  }
}
