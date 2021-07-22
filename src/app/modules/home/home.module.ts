import { TemplateModule } from './../../shared/template/template.module';
import { HomeRountingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    TemplateModule,
    HomeRountingModule
  ]
})
export class HomeModule { }
