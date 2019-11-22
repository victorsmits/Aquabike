import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  constructor() { }

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

  switchDate(d : Date) : Date{
    let j;
    switch (d.getDay()) {
      case 1:{j = "Lundi "; break}
      case 2:{j = "Mardi "; break}
      case 3:{j = "Mercredi "; break}
      case 4:{j = "jeudi "; break}
      case 5:{j = "Vendredi "; break}
      case 6:{j = "Samedi "; break}
      case 7:{j = "Dimanche "; break}
    }
    return j + d.getDate()
  }
}
