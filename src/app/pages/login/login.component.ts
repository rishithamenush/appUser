import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isSignUp = true;

  setAuthMode(signUp: boolean) {
    this.isSignUp = signUp;
  }
}
