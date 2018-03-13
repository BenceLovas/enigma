import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LoginFormComponent} from './login/login-form/login-form.component';
import {RegistrationFormComponent} from './login/registration-form/registration-form.component';
import {UserAuthenticationComponent} from './user/user-authentication/user-authentication.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: UserAuthenticationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [
  LoginComponent,
  LoginFormComponent,
  RegistrationFormComponent,
  UserAuthenticationComponent,
  DashboardComponent
];
