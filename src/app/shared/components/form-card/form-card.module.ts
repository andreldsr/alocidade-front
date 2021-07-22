import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCardComponent } from './form-card.component';



@NgModule({
  declarations: [FormCardComponent],
  imports: [
    CommonModule,
    MatInputModule
  ],
  exports: [FormCardComponent]
})
export class FormCardModule { }
