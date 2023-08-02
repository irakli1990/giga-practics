import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Input() title!: string;

  @Output() login = new EventEmitter<{
    login: string;
    password: string;
  }>();

  loginForm = this.fb.group({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private fb: FormBuilder) {}

  emitLoginForm() {
    this.login.emit({
      login: this.loginForm.value.login!,
      password: this.loginForm.value.password!,
    });
  }
}
