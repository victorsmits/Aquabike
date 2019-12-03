import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import {MatSelect} from "@angular/material/select";
import {AuthSignupData, Sessions, User} from '../Interface/Interface.module';
import {NgxMaterialTimepickerTheme} from 'ngx-material-timepicker';
import {Router} from '@angular/router';
import {ToolService} from '../service/tool.service';
import {ApiService} from '../service/api.service';
import {Person} from '../month/month.component';

//todo auto subscribe to session in function of his subscription
//todo modification base de donnée pour liaison entre type de session et utilisateur

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements AfterViewInit, OnInit{
  isLoading = false;
  darkTheme = this.tool.darkTheme;
  public user: User;
  days = this.tool.days;
  error;

  @ViewChild('daySelect',{static:false}) daySelect: MatSelect;
  @ViewChild('daySelect2',{static:false}) daySelect2: MatSelect;
  @ViewChild('timeSelect',{static:false}) timeSelect: MatSelect;
  @ViewChild('timeSelect2',{static:false}) timeSelect2: MatSelect;


  constructor(public authService: AuthService,
              private router : Router,
              private tool : ToolService,
              private api : ApiService,
              private auth : AuthService) { }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const authData: AuthSignupData = {
      email: form.value.email,
      username: form.value.username,
      Nom: form.value.Nom,
      Prenom: form.value.Prenom,
      Abonnement: Number(form.value.Abonnement),
      Jour: this.daySelect.value,
      Time: form.value.time,
      Jour2: this.daySelect2.value ? this.daySelect2.value : null ,
      Time2: form.value.sTime ? form.value.sTime : "00:00",
      password: form.value.password,
      passwordConfirmation: form.value.passwordConfirmation,
    };

    this.authService.createUser(authData).subscribe((next)=>{
      if(next["result"]){
        this.router.navigate(['']);
      }
    },error1 => {
      this.error = error1;
    });
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  // autoInscription(urldata){
  //   this.api.getHomeJson().subscribe(urldata =>{
  //     let data = JSON.parse(JSON.stringify(urldata));
  //     let listSession : Sessions[] = [];
  //     let listPerson : Person[] = [];
  //
  //     for(let i = 0; i < data.length; i++){
  //       listSession.push( this.tool.initTempSess(data[i]));
  //       listPerson.push({
  //         user : data[i]["idInscription"]
  //       });
  //     }
  //
  //     for(let session : Sessions in listSession){
  //       this.api.getProfileJson(this.user.username).subscribe(data=>{
  //         this.auth.initUser(data);
  //         this.user = this.auth.getCurrentUser();
  //
  //         if((this.user.Day == session.Date))
  //
  //       });
  //     }
  //   })
  //
  // }

}
