import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class AuthLoginComponent {
  login($event: { login: string; password: string }) {
    console.log($event);
  }
}
