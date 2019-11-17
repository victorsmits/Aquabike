import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import {AuthLoginData, AuthSignupData, Sessions, User} from "../Interface/Interface.module";
import {CookieService} from "ngx-cookie-service";
import {ApiService} from "./api.service";


@Injectable({ providedIn: 'root'})
export class AuthService {
  private isAuthenticated = false;
  private authStatusListener = new Subject<boolean>(); // just need to know if user is authenticated
  private currentUser: User;
  cookieValue = 'UNKNOWN';
  private data: JSON[];
  private listSession: Sessions[]=[];
  private User: User;

  constructor(private http: HttpClient,
              private cookie : CookieService,
              private router: Router,
              private api: ApiService) {}

  getIsAuth() {
    return Boolean(this.cookie.get('connected'));
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getCurrentUser():User{
    // this.updateUser();
    return JSON.parse(this.cookie.get('user'));
  }

  getCurrentUserSession() {
    return this.cookie.get('session');
  }

  createUser(authData : AuthSignupData) {
    return this.http.post('https://localhost:8000/api/register', authData)
      .subscribe(response => {
          this.router.navigate(['']);
      }
      );
  }

  loginUser(username: string, password: string) {
    const authData: AuthLoginData = {Username:username,password:password};
    this.http.post<{result: boolean}>('https://localhost:8000/api/login', authData)
      .subscribe(response => {
        if (response.result === true) {
          this.isAuthenticated = true; // needed to update authentication status
          this.authStatusListener.next(true); // telling everyone who is interested that the user is authenticated
          this.api.getProfileJson(username).subscribe(data=>{
            this.initUser(data)
          });

        }
        this.router.navigateByUrl('');
      });
  }

  daySwith(day) : string{
    let j;
    switch (day) {
      case 'Mon' : {j = 'Lundi'; break;}
      case 'Tue' : {j = 'Mardi'; break;}
      case 'Wed' : {j = 'Mercredi'; break;}
      case 'Thu' : {j = 'Jeudi'; break;}
      case 'Fry' : {j = 'Vendredi'; break;}
      case 'Sat' : {j = 'Samedi'; break;}
      case 'Sun' : {j = 'Dimanche'; break;}
      case 'Null' : {j = 'Null'; break;}
    }
    return j
  }

  initUser(data){

    this.listSession = [];
    this.data = JSON.parse(JSON.stringify(data));


    this.User = {
      id: this.data["id"],
      username : this.data["Username"],
      lastName: this.data["LastName"],
      firstName: this.data["FirstName"],
      abonnement: this.data["Abonnement"],
      Day: this.daySwith(this.data["Day"]),
      Time: this.data["Time"].split(' ')[1],
      Day2: this.daySwith(this.data["Day2"]),
      Time2: this.data["Time"].split(' ')[1],
      Email: this.data["Email"],
      Session: [],
      Role: this.data["roles"]
    };

    let inscription = this.data["idInscription"];

    for(let i = 0; i < inscription.length; i++) {
      let tempSess: Sessions;
      tempSess={
        Date:  new Date(inscription[i]["idSession"]["date"].split(' ')[0]),
        Time: inscription[i]["idSession"]["time"].split(' ')[1],
        Bike: inscription[i]["idSession"]["bike"],
        Cancel: inscription[i]["idSession"]["Cancel"],
        Id: inscription[i]["idSession"]["id"]
      };

      this.listSession.push(tempSess);
      this.User.Session.push(tempSess);
    }
    this.cookie.set('user',JSON.stringify(this.User));
    this.cookie.set('session',JSON.stringify(this.listSession));
    this.cookie.set('connected',"true");

  }

  logout() {
    this.cookie.delete('user');
    this.cookie.delete('session');
    this.cookie.delete('connected');
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.router.navigate(['']);
  }
}
