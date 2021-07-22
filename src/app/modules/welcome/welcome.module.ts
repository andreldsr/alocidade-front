import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeRoutingModule } from './welcome-routing.module'



@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
