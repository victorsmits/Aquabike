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
