import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import {AppMatModule} from '../app.mat.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    AppMatModule,
    ReactiveFormsModule
  ],
  declarations: [AuthComponent, LoginComponent, RegisterComponent, ForgotComponent]
})
export class AuthModule { }