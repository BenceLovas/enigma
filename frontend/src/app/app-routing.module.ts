import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LoginFormComponent} from './login/login-form/login-form.component';
import {RegistrationFormComponent} from './login/registration-form/registration-form.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserAuthenticationService} from './user/user-authentication.service';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [UserAuthenticationService]},
  {path: '', canActivate: [UserAuthenticationService], redirectTo: '/dashboard', pathMatch: 'full'},
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
  DashboardComponent
];
