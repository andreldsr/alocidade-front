import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { UserService } from './../user/user.service';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
    constructor(private router: Router, private userService: UserService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.userService.isLogged()) {
            this.router.navigate(['home'])
            return false
        }
        return true;
    }
}