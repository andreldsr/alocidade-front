import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from './../../../../core/auth/auth.service';
import { UserService } from './../../../../core/user/user.service';

@Component({
  selector: 'ol-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.authService.authenticate(email, password)
      .subscribe(res => this.router.navigate(['home']))
  }

}
