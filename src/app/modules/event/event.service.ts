import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { EventDetailDTO, EventListDTO } from 'src/app/model/event';

const API_URL = environment.API_URL + '/events';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<EventListDTO[]>(API_URL).pipe(take(1));
  }


  getById(id: any): Observable<EventDetailDTO> {
    return this.http.get<EventDetailDTO>(`${API_URL}/${id}`).pipe(take(1));
  }

  save(event: EventDetailDTO) {
    if (event.id == null) {
      return this.cadastrar(event);
    }
    return this.update(event);
  }

  cadastrar(event: EventDetailDTO): Observable<EventDetailDTO> {
    return this.http.post<EventDetailDTO>(API_URL, JSON.stringify(event)).pipe(take(1));
  }

  update(event: EventDetailDTO) {
    return this.http.put(`${API_URL}/${event.id}`, JSON.stringify(event)).pipe(take(1));
  }

  delete(event: EventListDTO) {
    console.log('delete');
    return this.http.delete(`${API_URL}/${event.id}`).pipe(take(1));
  }
}
