import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MonthComponent} from "./month/month.component";
import {LoginComponent} from "./login/login.component";


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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
