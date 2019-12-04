import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms';
import { AuthService } from '../service/auth.service';
import {MatSelect} from "@angular/material/select";
import {AuthSignupData, Sessions, TypeSession, User} from '../Interface/Interface.module';
import {NgxMaterialTimepickerTheme} from 'ngx-material-timepicker';
import {Router} from '@angular/router';
import {ToolService} from '../service/tool.service';
import {ApiService} from '../service/api.service';
import {Person} from '../month/month.component';

//todo auto subscribe to session in function of his subscription
//todo modification base de donnée pour liaison entre type de session et utilisateur

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements AfterViewInit, OnInit{
  isLoading = false;
  darkTheme = this.tool.darkTheme;
  public user: User;
  days = this.tool.days;
  private listTypeSession: TypeSession[];
  error;

  @ViewChild('daySelect',{static:false}) daySelect: MatSelect;
  @ViewChild('daySelect2',{static:false}) daySelect2: MatSelect;
  @ViewChild('timeSelect',{static:false}) timeSelect: MatSelect;
  @ViewChild('timeSelect2',{static:false}) timeSelect2: MatSelect;
  private listTypeSessionId: number[] = [];


  constructor(public authService: AuthService,
              private router : Router,
              private tool : ToolService,
              private api : ApiService,
              private auth : AuthService,
              private formBuilder: FormBuilder) { }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }

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
      if(this.listTypeSessionId.findIndex(session.Id.toString)){
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
      this.listTypeSession = this.tool.initTypeSession(data);
    })
  }

  // autoInscription(urldata){
  //   this.api.getHomeJson().subscribe(urldata =>{
  //     let data = JSON.parse(JSON.stringify(urldata));
  //     let listSession : Sessions[] = [];
  //     let listPerson : Person[] = [];
  //
  //     for(let i = 0; i < data.length; i++){
  //       listSession.push( this.tool.initTempSess(data[i]));
  //       listPerson.push({
  //         user : data[i]["idInscription"]
  //       });
  //     }
  //
  //     for(let session : Sessions in listSession){
  //       this.api.getProfileJson(this.user.username).subscribe(data=>{
  //         this.auth.initUser(data);
  //         this.user = this.auth.getCurrentUser();
  //
  //         if((this.user.Day == session.Date))
  //
  //       });
  //     }
  //   })
  //
  // }

  addTypeSession(Id: number) {
    if (this.listTypeSessionId.indexOf(Id) != null){
      this.listTypeSessionId.splice(this.listTypeSessionId.indexOf(Id),1);
    }else{
      this.listTypeSessionId.push(Id);
    }
  }
}
