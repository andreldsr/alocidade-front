import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
const KEY = 'authToken';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  hasToken() {
    return !!this.getToken();
  }

  hasValidToken(): boolean {
    if (!this.hasToken())
      return false
    const expDate: number = jwt_decode(this.getToken()).exp * 1000;
    if (Date.now() > expDate) {
      this.removeToken()
      return false;
    }
    return true;
  }

  getToken() {
    return window.localStorage.getItem(KEY);
  }

  setToken(token: string) {
    window.localStorage.setItem(KEY, token);
  }

  removeToken() {
    window.localStorage.removeItem(KEY);
  }
}
