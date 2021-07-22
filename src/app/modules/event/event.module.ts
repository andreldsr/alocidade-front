import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { EventFormComponent } from './event-form/event-form.component';
import { TemplateModule } from 'src/app/shared/template/template.module';
import { TableCardModule } from 'src/app/shared/components/table-card/table-card.module';
import { MatInputModule } from '@angular/material/input';
import { FormCardModule } from 'src/app/shared/components/form-card/form-card.module';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteDialogModule } from 'src/app/shared/components/delete-dialog/delete-dialog.module';
import { EventRoutingModule } from './event-routing.module';



@NgModule({
  declarations: [EventListComponent, EventFormComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    TemplateModule,
    TableCardModule,
    MatInputModule,
    FormCardModule,
    MatButtonModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    DeleteDialogModule
  ],
  providers: [DatePipe]
})
export class EventModule { }
