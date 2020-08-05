import { LoginGuard } from './core/auth/login.guard';
import { AuthGuard } from './core/auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  {
    path: 'welcome',
    loadChildren: () => import('./modules/welcome/welcome.module').then(m => m.WelcomeModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'marca', loadChildren: () => import('./modules/marca/marca.module').then(m => m.MarcaModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tipo-produto', loadChildren: () => import('./modules/tipo-produto/tipo-produto.module').then(m => m.TipoProdutoModule),
    canActivate: [AuthGuard]
  },
  { path: 'produto', loadChildren: () => import('./modules/produto/produto.module').then(m => m.ProdutoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
