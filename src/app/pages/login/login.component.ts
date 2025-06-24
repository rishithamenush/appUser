import { Component } from '@angular/core';
import {NgIf, NgClass} from '@angular/common';
import {UserRegister} from '../../model/user.model';
import {FormsModule, NgModel} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    NgIf,
    NgClass,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isSignUp = true;
  animationClass = 'signupAnimation';
  registerObj: UserRegister = new UserRegister();

  setAuthMode(signUp: boolean) {
    if (signUp !== this.isSignUp) {
      this.animationClass = signUp ? 'signupAnimation' : 'loginAnimation';
      this.isSignUp = signUp;
    }
  }
}
