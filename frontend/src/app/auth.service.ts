import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import {AuthLoginData, AuthSignupData} from "./auth-data/auth-data.module";


@Injectable({ providedIn: 'root'})
export class AuthService {
  private isAuthenticated = false;
  private authStatusListener = new Subject<boolean>(); // just need to know if user is authenticated
  private currentUser = null;

  constructor(private http: HttpClient, private router: Router) {}

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getCurrentUser() {
    return this.currentUser;
  }

  createUser(email: string, username: string, password: string,
             Nom: string, Prenom: string, Abonnement: string,
             Jour: string, passwordConfirmation: string) {
    const authData: AuthSignupData = {
      email: email,
      username: username,
      Nom: Nom,
      Prenom: Prenom,
      Abonnement: Number(Abonnement),
      Jour: Jour,
      password: password,
      passwordConfirmation: passwordConfirmation,
    };
    return this.http.post('https://localhost:8000/api/register', authData)
      .subscribe(response => {
        // console.log(response["error"]["errors"]);
      }
      );
    // this.router.navigateByUrl('');
  }

  loginUser(username: string, password: string) {
    const authData: AuthLoginData = {Username:username,password:password};
    this.http.post<{result: boolean}>('https://localhost:8000/api/login', authData)
      .subscribe(response => {
        if (response.result === true) {
          this.isAuthenticated = true; // needed to update authentication status
          this.authStatusListener.next(true); // telling everyone who is interested that the user is authenticated
          this.currentUser = authData.Username;
        }
        this.router.navigateByUrl('');
      });
  }

  logout() {
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.router.navigateByUrl('');
  }
}
