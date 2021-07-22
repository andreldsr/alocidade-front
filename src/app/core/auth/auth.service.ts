import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

import { UserService } from './../user/user.service';
import { environment } from './../../../environments/environment';

const API_URL = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private userService: UserService) { }

  authenticate(email: string, password: string) {
    console.log(`email: ${email} password: ${password}`);
    return this.http.post(`${API_URL}/auth/login`, { email, password }, { observe: 'response', responseType: 'text' })
      .pipe(tap(res => {
        console.log(res);
        const token = res.body as string;
        console.log(token);
        this.userService.setToken(token);
      })).pipe(catchError(err => {
        console.log('erro >> ' + err.message);
        throw Error('Não foi possível realizar o login');
      }));
  }


}
