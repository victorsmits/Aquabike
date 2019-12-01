import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {AuthLoginData, AuthSignupData, editAbo, Inscription, Sessions} from '../Interface/Interface.module';
import {Router} from "@angular/router";
import {catchError} from 'rxjs/operators';
import {Observable, Subject, throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(private http: HttpClient, private router:Router) { }

  getHomeJson(){
    return this.http.get('https://127.0.0.1:8000/api').pipe(
      catchError(this.handelError));
  }

  getMonthJson(month,year){
    let url = "https://127.0.0.1:8000/api/month";
    return this.http.post(url,{month:month,year:year}).pipe(
      catchError(this.handelError));
  }

  getProfileJson(username){
    let url = "https://localhost:8000/api/profile/";
    return this.http.post(url,{Username:username}).pipe(
      catchError(this.handelError));
  }

  getAboJson(){
    return this.http.get('https://127.0.0.1:8000/api/admin/abonnement').pipe(
      catchError(this.handelError));
  }

  postAboRenew(id){
    let url = "https://127.0.0.1:8000/api/admin/renewAbo";
    return this.http.post(url,{Id:id}).pipe(
      catchError(this.handelError));
  }

  editAboType(newAboType : editAbo){
    let url = "https://127.0.0.1:8000/api/admin/editAbo";
    return this.http.post(url,newAboType).pipe(
      catchError(this.handelError));
  }

  postCancelSess(id){
    let url = "https://127.0.0.1:8000/api/admin/Cancel";
    return this.http.post(url,{Id:id}).pipe(
      catchError(this.handelError));
  }

  postRenewSess(id,bike){
    let url = "https://127.0.0.1:8000/api/admin/recreate";
    return this.http.post(url,{Id:id,Bike:bike}).pipe(
      catchError(this.handelError));
  }

  postDeleteSess(id){
    let url = "https://127.0.0.1:8000/api/admin/Delete";
    return this.http.post(url,{Id:id}).pipe(
      catchError(this.handelError));
  }

  createNewSess(newSess : Sessions){
    let url = "https://127.0.0.1:8000/api/admin/session";
    return this.http.post(url,newSess).pipe(catchError(this.handelError));
  }

  createInscription(newInscription : Inscription){
    let url = "https://127.0.0.1:8000/api/Inscription";
    return this.http.post(url,newInscription).pipe(
      catchError(this.handelError));
  }

  deleteInscription(newInscription : Inscription){
    let url = "https://127.0.0.1:8000/api/Desinscription";
    return this.http.post(url,newInscription).pipe(
      catchError(this.handelError));
  }

  postLogin(authData : AuthLoginData){
   return this.http.post<{result: boolean}>('https://localhost:8000/api/login', authData).pipe(
     catchError(this.handelError));
  }

  postEditProfile(editProfile){
    return this.http.post<{result : boolean}>('https://localhost:8000/api/editProfile', editProfile).pipe(
      catchError(this.handelError));
  }

  postGenerateSessionAuto(year,bike){
    let url = "https://127.0.0.1:8000/api/admin/createsession";
    return this.http.post(url,{year:year,bike:bike}).pipe(
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
