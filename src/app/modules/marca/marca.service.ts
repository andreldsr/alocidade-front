import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from './../../../environments/environment';
import { Marca } from './../../model/marca';
import { Page } from 'src/app/model/Page';
import { PageEvent } from '@angular/material/paginator';

const API_URL = environment.API_URL + '/marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Page<Marca>>(API_URL).pipe(take(1));
  }

  getFullList() {
    return this.http.get<Page<Marca>>(API_URL + '?all=true').pipe(take(1));
  }

  getById(id: any): Observable<Marca> {
    return this.http.get<Marca>(`${API_URL}/${id}`).pipe(take(1));
  }

  getPage(pageEvent: PageEvent) {
    const params = new URLSearchParams();
    params.append('page', pageEvent.pageIndex.toString());
    params.append('size', pageEvent.pageSize.toString());
    return this.http.get<Page<Marca>>(API_URL + '?' + params.toString()).pipe(take(1));
  }

  save(marca: Marca) {
    if (marca.id == null) {
      return this.cadastrar(marca);
    }
    return this.update(marca);
  }

  cadastrar(marca: Marca): Observable<Marca> {
    return this.http.post<Marca>(API_URL, JSON.stringify(marca)).pipe(take(1));
  }

  update(marca: Marca) {
    return this.http.put(`${API_URL}/${marca.id}`, JSON.stringify(marca)).pipe(take(1));
  }

  delete(marca: Marca) {
    return this.http.delete(`${API_URL}/${marca.id}`).pipe(take(1));
  }
}
