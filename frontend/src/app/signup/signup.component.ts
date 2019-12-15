import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService } from '../service/auth.service';
import {MatSelect} from "@angular/material/select";
import {AuthSignupData, Sessions, TypeSession, User} from '../Interface/Interface.module';
import {Router} from '@angular/router';
import {ToolService} from '../service/tool.service';
import {ApiService} from '../service/api.service';

//todo auto subscribe to session in function of his subscription
//todo modification base de donnée pour liaison entre type de session et utilisateur

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements AfterViewInit, OnInit{
  isLoading = false;
  public user: User;
  days = this.tool.days;
  public listTypeSession: TypeSession[];
  error;

  @ViewChild('daySelect',{static:false}) daySelect: MatSelect;
  @ViewChild('daySelect2',{static:false}) daySelect2: MatSelect;
  @ViewChild('timeSelect',{static:false}) timeSelect: MatSelect;
  @ViewChild('timeSelect2',{static:false}) timeSelect2: MatSelect;
  private listTypeSessionId: number[] = [];


  constructor(public authService: AuthService,
              private router : Router,
              private tool : ToolService,
              private api : ApiService) { }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.isLoading = true;
    const authData: AuthSignupData = {
      email: form.value.email,
      username: form.value.username,
      Nom: form.value.Nom,
      Prenom: form.value.Prenom,
      Abonnement: Number(form.value.Abonnement),
      typeSessions : [],
      password: form.value.password,
      passwordConfirmation: form.value.passwordConfirmation,
    };


    for(let session of this.listTypeSession){
      if(this.listTypeSessionId.indexOf(session.Id) != -1){
        authData.typeSessions.push(session);
      }
    }

    this.authService.createUser(authData).subscribe((next)=>{
      if(next["result"]){
        this.router.navigate(['']);
      }
    },error1 => {
      this.error = error1;
    });
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.api.getTypeSession().subscribe(urldata=>{
      let data = JSON.parse(JSON.stringify(urldata));
      this.listTypeSession = [];
      for(let type of data){
        this.listTypeSession .push({
          Id : type["id"],
          Day : this.tool.daySwith(type["Day"]),
          Time : type["Time"].split(' ')[1]
        });
      }
    })
  }

  addTypeSession(Id: number) {
    if (this.listTypeSessionId.indexOf(Id) != -1){
      this.listTypeSessionId.splice(this.listTypeSessionId.indexOf(Id),1);
    }else{
      this.listTypeSessionId.push(Id);
    }
  }
}
