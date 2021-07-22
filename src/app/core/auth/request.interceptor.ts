import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    constructor(private tokenService: TokenService) { }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.tokenService.hasToken()) {
            req = req.clone({
                setHeaders: {
                    'Authorization': `Bearer ${this.tokenService.getToken()}`,
                    'Content-Type': 'application/json; charset=utf-8'
                },
            });
        }
        return next.handle(req);
    }
}
