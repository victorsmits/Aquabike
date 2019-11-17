export interface AuthSignupData {
  email: string;
  username: string;
  Nom: string;
  Prenom: string;
  Abonnement: number;
  Jour: string;
  Time: string;
  Jour2: string;
  Time2: string;
  password: string;
  passwordConfirmation: string;
}

export interface AuthLoginData {
  Username: string;
  password: string;
}

export interface User {
  id: number,
  username: string,
  lastName: string,
  firstName: string,
  abonnement: number,
  Day: string,
  Time: number,
  Day2: string,
  Time2: number,
  Email: string,
  Session: Sessions[],
  Role: any
}

export interface Sessions{
  Date : Date,
  Time : string,
  Bike : number,
  Cancel : boolean,
  Id : number,
}

export interface Inscription {
  Username: string,
  Id: number
}

export interface editAbo {
  FirstName: string,
  LastName: string,
  Id: number,
  aboType: number
}
