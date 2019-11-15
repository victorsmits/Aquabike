import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import {editAbo, Inscription, Sessions} from './Interface/Interface.module';
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
    let url = "https://127.0.0.1:8000/api/month/";
    url = url.concat(month);
    url = url.concat("/");
    url = url.concat(year);
    return this.http.get(url)
  }

  getInfoJson(id){
    let url = "https://127.0.0.1:8000/api/moreinfo/";
    url = url.concat(id);
    return this.http.get(url)
  }

  getProfileJson(username){
    let url = "https://localhost:8000/api/profile/";
    url = url.concat(username);
    return this.http.get(url)
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
