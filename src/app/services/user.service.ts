import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginModel, UserRegister} from '../model/user.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(obj: UserRegister) : Observable<UserRegister>{
    return this.http.post<UserRegister>("https://api.freeprojectapi.com/api/UserApp/CreateNewUser", obj)
  }

  onLogin(obj: LoginModel) : Observable<UserRegister>{
    return this.http.post<UserRegister>("https://api.freeprojectapi.com/api/UserApp/login", obj)
  }
}
