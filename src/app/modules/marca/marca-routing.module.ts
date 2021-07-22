import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcaResolver } from './marca-resolver.resolver';
import { MarcaFormComponent } from './marca-form/marca-form.component';
import { MarcaListComponent } from './marca-list/marca-list.component';
import { MarcaListResolver } from './marca-list/marca-list.resolver';

const routes: Routes = [
  {
    path: '', component: MarcaListComponent,
    resolve: {
      marcaList: MarcaListResolver
    }
  },
  {
    path: 'cadastrar', component: MarcaFormComponent,
    resolve: {
      marca: MarcaResolver
    }
  },
  {
    path: 'editar/:id', component: MarcaFormComponent,
    resolve: {
      marca: MarcaResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarcaRoutingModule { }
