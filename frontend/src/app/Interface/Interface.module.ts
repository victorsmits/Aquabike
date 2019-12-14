
export interface AuthSignupData {
  email: string;
  username: string;
  Nom: string;
  Prenom: string;
  Abonnement: number;
  typeSessions : TypeSession[]
  password: string;
  passwordConfirmation: string;
}

export interface AuthLoginData {
  Username: string;
  password: string;
}

export interface User {
  id?: number,
  username?: string,
  lastName?: string,
  firstName?: string,
  abonnement?: number,
  typeSessions? : TypeSession[]
  Email?: string,
  Session?: Sessions[],
  Role?: any
}

export interface TypeSession {
  Id : number,
  Day : string,
  Time : string,
  Person? : User[]
}

export interface Sessions{
  Date : string,
  Time : string,
  Bike : number,
  Cancel : boolean,
  Id : number,
  Person? : User[]
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

export interface editProfileInterface {
  id : number,
  lastName: string,
  firstName: string,
  Email : string,
  password : string,
  typeSessions : TypeSession[]
}
