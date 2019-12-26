import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {AuthLoginData, AuthSignupData, editAbo, Inscription, Sessions, TypeSession} from '../Interface/Interface.module';
import {Router} from "@angular/router";
import {catchError} from 'rxjs/operators';
import {Observable, Subject, throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ApiService {

  public ip = "http://51.178.29.162:3000";
  // public ip = "https://127.0.0.1:8000";

  constructor(private http: HttpClient, private router:Router) { }

  getHomeJson(){
    return this.http.get(this.ip + '/api').pipe(
      catchError(this.handelError));
  }

  getMonthJson(month,year){
    let url = this.ip + "/api/month/" + month + "/" + year;
    return this.http.get(url).pipe(
      catchError(this.handelError));
  }

  getProfileJson(username){
    let url = this.ip + "/api/profile/" + username;
    return this.http.get(url).pipe(
      catchError(this.handelError));
  }

  getAboJson(){
    return this.http.get(this.ip + '/api/admin/abonnement').pipe(
      catchError(this.handelError));
  }

  postAboRenew(id){
    let url = this.ip + "/api/admin/renewAbo";
    return this.http.put(url,{Id:id}).pipe(
      catchError(this.handelError));
  }

  editAboType(newAboType : editAbo){
    let url = this.ip + "/api/admin/editAbo";
    return this.http.put(url,newAboType).pipe(
      catchError(this.handelError));
  }

  postCancelSess(id){
    let url = this.ip + "/api/admin/Cancel";
    return this.http.put(url,{Id:id}).pipe(
      catchError(this.handelError));
  }

  postRenewSess(id,bike){
    let url = this.ip + "/api/admin/recreate";
    return this.http.put(url,{Id:id,Bike:bike}).pipe(
      catchError(this.handelError));
  }

  deleteSess(id){
    let url = this.ip + "/api/admin/session/" + id ;
    return this.http.delete(url).pipe(
      catchError(this.handelError));
  }

  createNewSess(newSess : Sessions){
    let url = this.ip + "/api/admin/session";
    return this.http.post(url,newSess).pipe(catchError(this.handelError));
  }

  postGenerateSessionAuto(year,list,bike){
    let url = this.ip + "/api/admin/autocreate";
    return this.http.post(url,{year:year,bike:bike,idTypeSession:list}).pipe(
      catchError(this.handelError));
  }

  createInscription(newInscription : Inscription){
    let url = this.ip + "/api/Inscription";
    return this.http.post(url,newInscription).pipe(
      catchError(this.handelError));
  }

  delInscription(newInscription : Inscription){
    let url = this.ip + "/api/Desinscription/" + newInscription.Username + "/" + newInscription.Id;
    return this.http.delete(url).pipe(
      catchError(this.handelError));
  }

  postLogin(authData : AuthLoginData){
    let url = this.ip +'/api/login';
    return this.http.post<{result: boolean}>(url, authData).pipe(
     catchError(this.handelError));
  }

  postEditProfile(editProfile){
    let url = this.ip + '/api/editProfile';
    return this.http.put<{result : boolean}>(url, editProfile).pipe(
      catchError(this.handelError));
  }

  getTypeSession(){
    let url = this.ip + "/api/TypeSession";
    return this.http.get(url).pipe(
      catchError(this.handelError));
  }

  delTypeSession(Id : number){
    let url = this.ip + "/api/TypeSession/" + Id;
    return this.http.delete(url).pipe(
      catchError(this.handelError));
  }

  addTypeSession(typeSession : TypeSession){
    let url = this.ip + "/api/TypeSession";
    return this.http.post(url,typeSession).pipe(
      catchError(this.handelError));
  }

  editTypeSession(typeSession : TypeSession){
    let url = this.ip + "/api/TypeSession";
    return this.http.put(url,typeSession).pipe(
      catchError(this.handelError));
  }

  delUser(Id:number){
    let url = this.ip + "/api/admin/user/" + Id;
    return this.http.delete(url).pipe(
      catchError(this.handelError));
  }

  handelError(err){
    if(err instanceof HttpErrorResponse){
      return throwError(err.error.error);
    }else{
      return throwError(err.message)
    }

  }

}
