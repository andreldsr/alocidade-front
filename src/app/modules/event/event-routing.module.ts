import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventFormComponent } from './event-form/event-form.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventListResolver } from './event-list/event-list.resolver';

import { EventResolver } from './event.resolver';


const routes: Routes = [
  {
    path: '', component: EventListComponent,
    resolve: {
      eventList: EventListResolver
    }
  },
  {
    path: 'register', component: EventFormComponent,
    resolve: {
      event: EventResolver
    }
  },
  {
    path: 'edit/:id', component: EventFormComponent,
    resolve: {
      event: EventResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
