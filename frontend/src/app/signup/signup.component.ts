import {Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import {MatSelect} from "@angular/material/select";
import {AuthSignupData} from '../Interface/Interface.module';
import {NgxMaterialTimepickerTheme} from 'ngx-material-timepicker';

//todo display sign up error
//todo auto subscribe to session in function of his subscription

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isLoading = false;
  error;

  @ViewChild('daySelect',{static:false}) daySelect: MatSelect;
  @ViewChild('daySelect2',{static:false}) daySelect2: MatSelect;
  @ViewChild('timeSelect',{static:false}) timeSelect: MatSelect;
  @ViewChild('timeSelect2',{static:false}) timeSelect2: MatSelect;

  days=[
    {code:"Mon",nom:"Lundi"},
    {code:"Tue",nom:"Mardi"},
    {code:"Wed",nom:"Mercredi"},
    {code:"Thu",nom:"Jeudi"},
    {code:"Fry",nom:"Vendredi"},
    {code:"Sat",nom:"Samedi"},
    {code:"Sun",nom:"Dimanche"},
  ];

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

  constructor(public authService: AuthService) { }

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

    console.log(authData);

    this.error = this.authService.createUser(authData);

    console.log(this.error);

    this.isLoading = true;
  }

}
