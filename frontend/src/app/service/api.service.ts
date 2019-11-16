import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import {editAbo, Inscription, Sessions} from '../Interface/Interface.module';
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(private http: HttpClient, private router:Router) { }

  getHomeJson(){
    return this.http.get('https://127.0.0.1:8000/api')
  }

  getMonthJson(month,year){
    let url = "https://127.0.0.1:8000/api/month";
    return this.http.post(url,{month:month,year:year})
  }

  getProfileJson(username){
    let url = "https://localhost:8000/api/profile/";
    return this.http.post(url,{Username:username})
  }

  getAboJson(){
    return this.http.get('https://127.0.0.1:8000/api/admin/abonnement')
  }

  postAboRenew(id){
    let url = "https://127.0.0.1:8000/api/admin/renewAbo";
    return this.http.post(url,{Id:id})
  }

  editAboType(newAboType: editAbo){
    let url = "https://127.0.0.1:8000/api/admin/editAbo";
    return this.http.post(url,newAboType)
  }

  postCancelSess(id){
    let url = "https://127.0.0.1:8000/api/admin/Cancel";
    return this.http.post(url,{Id:id})
  }

  postRenewSess(id){
    let url = "https://127.0.0.1:8000/api/admin/recreate";
    return this.http.post(url,{Id:id,Bike:9})
  }

  postDeleteSess(id){
    let url = "https://127.0.0.1:8000/api/admin/Delete";
    return this.http.post(url,{Id:id})
  }

  createNewSess(newSess:Sessions){
    let url = "https://127.0.0.1:8000/api/admin/session";
    this.http.post(url,newSess).subscribe(urldata=>{
      if(urldata['result']){
        this.router.navigate(['admin/Session'])
      }
    });
  }

  createInscription(newInscription : Inscription){
    let url = "https://127.0.0.1:8000/api/Inscription";
    return this.http.post(url,newInscription)
  }

  deleteInscription(newInscription : Inscription){
    let url = "https://127.0.0.1:8000/api/Desinscription";
    return this.http.post(url,newInscription)
  }

}