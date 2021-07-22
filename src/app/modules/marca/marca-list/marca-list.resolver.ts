import { Page } from './../../../model/Page';
import { MarcaService } from './../marca.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Marca } from 'src/app/model/marca';

@Injectable({ providedIn: 'root' })
export class MarcaListResolver implements Resolve<Page<Marca>> {

    constructor(private marcaService: MarcaService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Page<Marca>> {
        return this.marcaService.getAll();
    }
}