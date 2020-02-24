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
import {AuthGuard} from './guard/auth.guard';
import {AdminGuard} from './guard/admin.guard';
import {TypeSessionComponent} from './type-session/type-session.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';


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
    path:'rpp/:id',
    component : ResetPasswordComponent,
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
  {
    path:'admin/Session/Type',
    component : TypeSessionComponent,
    canActivate : [AdminGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
