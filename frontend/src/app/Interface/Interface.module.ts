export interface AuthSignupData {
  email: string;
  username: string;
  Nom: string;
  Prenom: string;
  Abonnement: number;
  Jour: string;
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
  Email: string,
  Session: Sessions[],
  Role: any
}

export interface Sessions{
  Date : string,
  Time : string,
  Bike : number,
  Cancel : boolean,
  Id : number,
}

export interface Inscription {
  Username: string,
  Id: number
}
