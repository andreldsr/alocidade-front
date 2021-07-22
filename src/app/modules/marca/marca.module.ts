import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { MarcaRoutingModule } from './marca-routing.module';
import { MarcaListComponent } from './marca-list/marca-list.component';
import { TableCardModule } from './../../shared/components/table-card/table-card.module';
import { TemplateModule } from './../../shared/template/template.module';
import { MarcaFormComponent } from './marca-form/marca-form.component';
import { FormCardModule } from '../../shared/components/form-card/form-card.module';
import { DeleteDialogModule } from '../../shared/components/delete-dialog/delete-dialog.module';


@NgModule({
  declarations: [MarcaListComponent, MarcaFormComponent],
  imports: [
    CommonModule,
    MarcaRoutingModule,
    TemplateModule,
    TableCardModule,
    MatInputModule,
    FormCardModule,
    MatButtonModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    DeleteDialogModule
  ]
})
export class MarcaModule { }
