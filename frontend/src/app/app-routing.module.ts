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
import {AuthGuard} from './auth.guard';
import {AdminGuard} from './admin.guard';


const routes: Routes = [
  {
    path:'',
    component : HomeComponent,
    canActivate : [AuthGuard]
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
    path:'month',
    component : MonthComponent,
    canActivate : [AuthGuard]
  },
  {
    path:'profile',
    component : ProfileComponent,
    canActivate : [AuthGuard]
  },
  {
    path:'admin',
    component : AdminComponent,
    canActivate : [AdminGuard]
  },
  {
    path:'admin/Session',
    component : AdminSessionComponent,
    canActivate : [AdminGuard]

  },
  {
    path:'admin/Abonnement',
    component : AdminAboComponent,
    canActivate : [AdminGuard]

  },
  {
    path:'admin/Session/Create',
    component : AdminCreateSessionComponent,
    canActivate : [AdminGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
