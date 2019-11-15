import {Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import {MatSelect} from "@angular/material/select";

let viewChild: any;
// @ts-ignore
viewChild = ViewChild("daySelect");

//todo display sign up error

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isLoading = false;
  error;

  @viewChild daySelect: MatSelect;

  days=[
    {code:"Mon",nom:"Lundi"},
    {code:"Tue",nom:"Mardi"},
    {code:"Wed",nom:"Mercredi"},
    {code:"Thu",nom:"Jeudi"},
    {code:"Fry",nom:"Vendredi"},
    {code:"Sat",nom:"Samedi"},
    {code:"Sun",nom:"Dimanche"},
  ];

  constructor(public authService: AuthService) { }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.error = this.authService.createUser(form.value.email,
      form.value.username,
      form.value.password,
      form.value.Nom,
      form.value.Prenom,
      form.value.Abonnement,
      this.daySelect.value,
      form.value.passwordConfirmation);

    console.log(this.error);

    this.isLoading = true;
  }

}
