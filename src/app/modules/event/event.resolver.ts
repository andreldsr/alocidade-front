import { Marca } from 'src/app/model/marca';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EventService } from './event.service';
import { EventDetailDTO } from 'src/app/model/event';

@Injectable({ providedIn: 'root' })
export class EventResolver implements Resolve<EventDetailDTO> {

    constructor(private eventService: EventService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<EventDetailDTO> {
        const id = route.params?.id;
        if (id == null) {
            return of(new EventDetailDTO());
        }
        return this.eventService.getById(id);
    }
}
