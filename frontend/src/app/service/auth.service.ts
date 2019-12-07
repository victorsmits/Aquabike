import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import {Subject, Observable, throwError} from 'rxjs';
import {AuthLoginData, AuthSignupData, Sessions, User} from "../Interface/Interface.module";
import {CookieService} from "ngx-cookie-service";
import {ApiService} from "./api.service";
import {catchError} from 'rxjs/operators';
import {ToolService} from './tool.service';


@Injectable({ providedIn: 'root'})
export class AuthService {

  private isAuthenticated = false;
  private authStatusListener : Subject<boolean> = new Subject<boolean>(); // just need to know if user is authenticated
  private data: JSON[];
  private User: User;
  private errorListener : Subject<String> =  new Subject<String>();

  constructor(private http: HttpClient,
              private cookie : CookieService,
              private router: Router,
              private api: ApiService,
              private tool : ToolService) {}

  getIsAuth() {
    return Boolean(this.cookie.get('connected'));
  }

  getAuthStatusListener() : Observable<any> {
    return this.authStatusListener.asObservable();
  }

  getErrorListener() : Observable<any> {
    return this.errorListener.asObservable();
  }

  getCurrentUser():User{
    // this.updateUser();
    return JSON.parse(this.cookie.get('user'));
  }

  createUser(authData : AuthSignupData) {
    return this.http.post('https://localhost:8000/api/register', authData).pipe(
      catchError(
        (err : any) => {
          if(err instanceof HttpErrorResponse){
            return throwError(err.error.errors);
          }else{
            return throwError(err.message)
          }
        }
      )
    );
  }

  loginUser(username: string, password: string) {
    let authData: AuthLoginData = {Username:username,password:password};

    this.api.postLogin(authData)
      .subscribe(
      response => {
        if (response["result"] === true) {
          this.api.getProfileJson(username).subscribe(
          data => {
            this.isAuthenticated = true; // needed to update authentication status
            this.initUser(data);
            this.authStatusListener.next(true);// telling everyone who is interested that the user is authenticated
          });
        }
      },error =>{
        this.errorListener.error(error);
        this.authStatusListener.next(false);
        this.errorListener = new Subject<String>();
      });
  }

  initUser(data){
    this.data = JSON.parse(JSON.stringify(data));
    this.User = {
      id: this.data["id"],
      username : this.data["Username"],
      lastName: this.data["LastName"],
      firstName: this.data["FirstName"],
      abonnement: this.data["Abonnement"],
      typeSessions : [],
      Email: this.data["Email"],
      Session: [],
      Role: this.data["roles"]
    };

    let inscription = this.data["idInscription"];
    for(let typeSess of this.data["IdTypeSession"]){
     this.User.typeSessions.push({
        Id : typeSess["IdTypeSession"]["id"],
        Day : this.tool.daySwith(typeSess["day"]),
        Time : typeSess["IdTypeSession"]["time"].split(' ')[1]
      });
    }

    for(let i = 0; i < inscription.length; i++) {
      this.User.Session.push(this.tool.initTempSess(inscription[i]["idSession"]));
    }
    console.log(this.User);
    this.cookie.set('user',JSON.stringify(this.User));
    this.cookie.set('connected',"true");

  }

  logout() {
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.cookie.delete('user');
    this.cookie.delete('session');
    this.cookie.delete('connected');
    this.router.navigate(['login']);
  }
}
