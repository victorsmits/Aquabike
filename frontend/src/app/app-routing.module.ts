import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MonthComponent} from "./month/month.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {ProfileComponent} from "./profile/profile.component";
import {AdminComponent} from "./admin/admin.component";
import {AdminSessionComponent} from "./admin-session/admin-session.component";
import {AdminAboComponent} from "./admin-abo/admin-abo.component";
import {AdminCreateSessionComponent} from "./admin-create-session/admin-create-session.component";


const routes: Routes = [
  {
    path:'',
    component : HomeComponent
  },
  {
    path:'month',
    component : MonthComponent,
  },
  {
    path:'login',
    component : LoginComponent,
  },
  {
    path:'signup',
    component : SignupComponent,
  },
  {
    path:'profile',
    component : ProfileComponent,
  },
  {
    path:'admin',
    component : AdminComponent,
  },
  {
    path:'admin/Session',
    component : AdminSessionComponent,
  },
  {
    path:'admin/Abonnement',
    component : AdminAboComponent,
  },
  {
    path:'admin/Session/Create',
    component : AdminCreateSessionComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
