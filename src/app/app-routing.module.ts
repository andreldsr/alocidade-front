import { LoginGuard } from './core/auth/login.guard';
import { AuthGuard } from './core/auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
    path: 'event', loadChildren: () => import('./modules/event/event.module').then(m => m.EventModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
