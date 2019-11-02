import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(private http: HttpClient) { }

  getHomeJson(){
    return this.http.get('https://127.0.0.1:8000/api')
  }

  getMonthJson(month){
    let url = "https://127.0.0.1:8000/api/month/";
    url = url.concat(month);
    return this.http.get(url)
  }
}
