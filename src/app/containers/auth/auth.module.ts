import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './auth-login/login-form/login-form.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AuthComponent,
    AuthLoginComponent,
    AuthRegisterComponent,
    LoginFormComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, FormsModule, ReactiveFormsModule],
})
export class AuthModule {}
