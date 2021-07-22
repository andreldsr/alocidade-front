import { EventListDTO } from 'src/app/model/event';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from '../event.service';

@Injectable({ providedIn: 'root' })
export class EventListResolver implements Resolve<EventListDTO[]> {

    constructor(private eventService: EventService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<EventListDTO[]> {
        return this.eventService.getAll();
    }
}
