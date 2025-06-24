import { Component } from '@angular/core';
import {NgIf, NgClass} from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isSignUp = true;
  animationClass = 'signupAnimation';

  setAuthMode(signUp: boolean) {
    if (signUp !== this.isSignUp) {
      this.animationClass = signUp ? 'signupAnimation' : 'loginAnimation';
      this.isSignUp = signUp;
    }
  }
}
