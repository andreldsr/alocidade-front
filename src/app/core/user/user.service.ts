import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

import { TokenService } from './../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userSubject = new Subject<User>();

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  getUser() {
    return this.userSubject.asObservable();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.setUserAndNotify();
  }

  isLogged(): boolean {
    return this.tokenService.hasValidToken();
  }

  logout() {
    this.tokenService.removeToken();
  }

  private setUserAndNotify() {
    const user = jwt_decode(this.tokenService.getToken()) as User;
    this.userSubject.next(user);
  }
}
