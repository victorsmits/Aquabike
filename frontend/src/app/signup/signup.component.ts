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
  listTypeClient: String[] = ["Sans abonnement","Avec abonnement"];
  abo: boolean = false;
  typeClient: String;


  constructor(public authService: AuthService,
              private router : Router,
              private tool : ToolService,
              private api : ApiService) { }

  onSignup(form: NgForm) {
    const authData: AuthSignupData = {
      email: form.value.Email,
      username: form.value.User,
      Nom: form.value.LN,
      Prenom: form.value.FN,
      Abonnement: this.abo? Number(form.value.Abonnement):999999,
      typeSessions : [],
      password: form.value.PWD,
      passwordConfirmation: form.value.passwordConfirmation,
    };

    for(let session of this.listTypeSession){
      if(this.listTypeSessionId.indexOf(session.Id) != -1){
        authData.typeSessions.push(session);
      }
    }

    console.log(authData);

    if(authData.typeSessions.length == 0 && this.abo){
      this.isLoading = true;
      this.error = "Veuillez sélectionner au minimum un horaire";
      this.isLoading = false;
    }else{
      console.log(authData);
      this.authService.createUser(authData).subscribe((next) => {
        if(next["result"]){
          this.router.navigate(['']);
        }
      },error1 => {
        this.error = error1;
        this.isLoading = false;
      });
    }
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

  setTypeClient(client) {
    switch(client){
      case "Avec abonnement":
        this.abo=true;
        this.ngOnInit();
        this.tool.openSnackBar("Veuillez sélectionner au minimum un horaire dans la liste!","",10000);
        break;
      case "Sans abonnement":
        this.abo = false;
    }
  }
}
