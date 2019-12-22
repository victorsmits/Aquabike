import {Injectable} from '@angular/core';
import {Sessions, TypeSession, User} from '../Interface/Interface.module';
import {NgxMaterialTimepickerTheme} from 'ngx-material-timepicker';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

export interface Days {
  code : string,
  nom : string,
}

@Injectable({
  providedIn: 'root'
})

export class ToolService {
  get isHandset$(): Observable<boolean> {
    return this._isHandset$;
  }
  private _isHandset$: Observable<boolean> = this.breakpointObserver.observe([
    Breakpoints.HandsetLandscape,
    Breakpoints.HandsetPortrait,
    Breakpoints.TabletLandscape,
    Breakpoints.TabletPortrait])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  get days(): Days[] {
    return this._days;
  }
  get darkTheme(): NgxMaterialTimepickerTheme {
    return this._darkTheme;
  }

  private _darkTheme: NgxMaterialTimepickerTheme = {
    container: {
      bodyBackgroundColor: '#424242',
      buttonColor: '#fff'
    },
    dial: {
      dialBackgroundColor: '#555',
    },
    clockFace: {
      clockFaceBackgroundColor: '#555',
      clockHandColor: '#9fbd90',
      clockFaceTimeInactiveColor: '#fff'
    }
  };
  private _days : Days[] =[
    {code:"Mon",nom:"Lundi"},
    {code:"Tue",nom:"Mardi"},
    {code:"Wed",nom:"Mercredi"},
    {code:"Thu",nom:"Jeudi"},
    {code:"Fry",nom:"Vendredi"},
    {code:"Sat",nom:"Samedi"},
    {code:"Sun",nom:"Dimanche"},
  ];

  constructor(private breakpointObserver: BreakpointObserver) { }

  daySwith(day){

    let j;
    switch (day) {
      case 'Mon' : {j = 'Lundi'; break;}
      case 'Tue' : {j = 'Mardi'; break;}
      case 'Wed' : {j = 'Mercredi'; break;}
      case 'Thu' : {j = 'Jeudi'; break;}
      case 'Fry' : {j = 'Vendredi'; break;}
      case 'Sat' : {j = 'Samedi'; break;}
      case 'Sun' : {j = 'Dimanche'; break;}
      case 'Null' : {j = 'Null'; break;}
    }
    return j
  }

  invDaySwitch(day){
    let j;
    switch (day) {
      case 'Lundi' : {j = 'Mon'; break;}
      case 'Mardi' : {j = 'Tue'; break;}
      case 'Mercredi' : {j = 'Wed'; break;}
      case 'Jeudi' : {j = 'Thu'; break;}
      case 'Vendredi' : {j = 'Fry'; break;}
      case 'Samedi' : {j = 'Sat'; break;}
      case 'Dimanche' : {j = 'Sun'; break;}
      case 'Null' : {j = 'Null'; break;}
    }
    return j
  }

  switchDate(d : Date) : string{
    let j : string;
    switch (d.getDay()) {
      case 1 : {j = "Lundi "; break}
      case 2 : {j = "Mardi "; break}
      case 3 : {j = "Mercredi "; break}
      case 4 : {j = "Jeudi "; break}
      case 5 : {j = "Vendredi "; break}
      case 6 : {j = "Samedi "; break}
      case 0 : {j = "Dimanche "; break}
    }
    return j + d.getDate()
  }

  initTempSess(data : JSON, date) : Sessions{
    let d = new Date(date);
    return {
      Date: d.toISOString(),
      Time: data["time"].split(' ')[1],
      Bike: data["bike"],
      Cancel: data["Cancel"],
      Id: data["id"],
    }
  }

  checkIfBeforeToday(date){
    let d = new Date();
    d.setDate(d.getDate()-1);
    return new Date(date) >= d
  }

  switchProfileDate(d) : string{
    let date = new Date(d);
    let j;
    switch (date.getDay()) {
      case 1:{j = "Lundi "; break}
      case 2:{j = "Mardi "; break}
      case 3:{j = "Mercredi "; break}
      case 4:{j = "jeudi "; break}
      case 5:{j = "Vendrdi "; break}
      case 6:{j = "Samedi "; break}
      case 0:{j = "Dimanche "; break}
    }
    let months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
    return j + date.getDate() + " " +  months[date.getMonth()] + " " + date.getFullYear()
  }

  initListPersDetail(listPers): User[]{
    let tempPers : User[] = [];
    for(let pers of listPers){
      let idPerson;
      if(pers["IdPerson"]){
        idPerson = pers["IdPerson"]
      }else{
        idPerson = pers["idPerson"]
      }
      tempPers.push({
        lastName : idPerson["lastName"],
        firstName : idPerson["firstName"],
      })
    }
    return tempPers;
  }

  initTypeSession(str : string) : TypeSession[]{
    str = str.replace(/"day"/gi, "\"Day\"");
    str = str.replace(/"time"/gi, "\"Time\"");
    let data = JSON.parse(str);

    let typeSession : TypeSession[] = [];
    for(let type of data){
      let TypeSess;
      if(type["IdTypeSession"]){
        TypeSess = type["IdTypeSession"]
      }else if(type["idTypeSession"]){
        TypeSess = type["idTypeSession"]
      }else{
        TypeSess = type
      }
      let tempType : TypeSession = {
        Id : TypeSess["id"],
        Day : this.daySwith(TypeSess["Day"]),
        Time : TypeSess["Time"].split(' ')[1],
      };

      if(type["idTypeSession"]){
        tempType.Person = this.initListPersDetail(TypeSess["idTypeSession"])
      }else if(type["idPerson"]){
        tempType.Person = this.initListPersDetail(TypeSess["idPerson"])
      }
      typeSession.push(tempType)
    }
    return typeSession;
  }


}
