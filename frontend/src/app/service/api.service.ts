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

  constructor(private http: HttpClient, private router:Router) { }

  getHomeJson(){
    return this.http.get(this.ip + '/api').pipe(
      catchError(this.handelError));
  }

  getMonthJson(month,year){
    let url = this.ip + "/api/month";
    return this.http.post(url,{month:month,year:year}).pipe(
      catchError(this.handelError));
  }

  getProfileJson(username){
    let url = this.ip + "/api/profile/";
    return this.http.post(url,{Username:username}).pipe(
      catchError(this.handelError));
  }

  getAboJson(){
    return this.http.get(this.ip + '/api/admin/abonnement').pipe(
      catchError(this.handelError));
  }

  postAboRenew(id){
    let url = this.ip + "/api/admin/renewAbo";
    return this.http.post(url,{Id:id}).pipe(
      catchError(this.handelError));
  }

  editAboType(newAboType : editAbo){
    let url = this.ip + "/api/admin/editAbo";
    return this.http.post(url,newAboType).pipe(
      catchError(this.handelError));
  }

  postCancelSess(id){
    let url = this.ip + "/api/admin/Cancel";
    return this.http.post(url,{Id:id}).pipe(
      catchError(this.handelError));
  }

  postRenewSess(id,bike){
    let url = this.ip + "/api/admin/recreate";
    return this.http.post(url,{Id:id,Bike:bike}).pipe(
      catchError(this.handelError));
  }

  postDeleteSess(id){
    let url = this.ip + "/api/admin/Delete";
    return this.http.post(url,{Id:id}).pipe(
      catchError(this.handelError));
  }

  createNewSess(newSess : Sessions){
    let url = this.ip + "/api/admin/session";
    return this.http.post(url,newSess).pipe(catchError(this.handelError));
  }

  createInscription(newInscription : Inscription){
    let url = this.ip + "/api/Inscription";
    return this.http.post(url,newInscription).pipe(
      catchError(this.handelError));
  }

  deleteInscription(newInscription : Inscription){
    let url = this.ip + "/api/Desinscription";
    return this.http.post(url,newInscription).pipe(
      catchError(this.handelError));
  }

  postLogin(authData : AuthLoginData){
   return this.http.post<{result: boolean}>(this.ip +'/api/login', authData).pipe(
     catchError(this.handelError));
  }

  postEditProfile(editProfile){
    return this.http.post<{result : boolean}>(this.ip + '/api/editProfile', editProfile).pipe(
      catchError(this.handelError));
  }

  postGenerateSessionAuto(year,bike){
    let url = this.ip + "/api/admin/createsession";
    return this.http.post(url,{year:year,bike:bike}).pipe(
      catchError(this.handelError));
  }

  getTypeSession(){
    let url = this.ip + "/api/TypeSession/get";
    return this.http.get(url).pipe(
      catchError(this.handelError));
  }

  delTypeSession(Id : number){
    let url = this.ip + "/api/TypeSession/del";
    return this.http.post(url,{Id : Id}).pipe(
      catchError(this.handelError));
  }

  addTypeSession(typeSession : TypeSession){
    let url = this.ip + "/api/TypeSession/add";
    return this.http.post(url,typeSession).pipe(
      catchError(this.handelError));
  }

  editTypeSession(typeSession : TypeSession){
    let url = this.ip + "/api/TypeSession/edit";
    return this.http.post(url,typeSession).pipe(
      catchError(this.handelError));
  }

  postDelUser(Id:number){
    let url = this.ip + "/api/admin/delAbo";
    return this.http.post(url,{id:Id}).pipe(
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
