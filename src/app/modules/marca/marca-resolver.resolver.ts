import { MarcaService } from './marca.service';
import { Marca } from 'src/app/model/marca';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MarcaResolver implements Resolve<Marca> {

    constructor(private marcaService: MarcaService){}

    resolve(route: ActivatedRouteSnapshot): Observable<Marca> {
        const id = route.params?.id;
        if (id == null) {
            return of(new Marca());
        }
        return this.marcaService.getById(id);
    }
}
