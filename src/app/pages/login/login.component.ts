import { Component, inject } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {LoginModel, UserRegister} from '../../model/user.model';
import { UserService } from '../../services/user.service';
import {Router} from '@angular/router';

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
  loginObj: LoginModel = new LoginModel();
  private userService = inject(UserService);
  router = inject(Router)

  setAuthMode(signUp: boolean) {
    if (signUp !== this.isSignUp) {
      this.animationClass = signUp ? 'signupAnimation' : 'loginAnimation';
      this.isSignUp = signUp;
    }
  }
  onRegister() {
    this.userService.registerUser(this.registerObj).subscribe((res: UserRegister) => {
      alert("User registered successfully! Please log in.");
      this.setAuthMode(false);
      this.registerObj = new UserRegister(); // Optionally clear the registration form
    }, (err) => {
      alert(err.error?.title || err.message || 'Registration failed');
    })
  }

  onLogin() {
    this.userService.onLogin(this.loginObj).subscribe((res: UserRegister) => {
      alert("Login successful!");
      localStorage.setItem('logData',JSON.stringify(res))
      this.router.navigateByUrl('/dashboard');
    }, (err) => {
      alert(err.error?.title || err.message || 'Login failed');
    })
  }
}
