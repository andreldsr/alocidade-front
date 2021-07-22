import { Router } from '@angular/router';
import { UserService } from './../../../../core/user/user.service';
import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/home', title: 'Início', icon: 'dashboard', class: '' },
  { path: '/event', title: 'Eventos', icon: 'content_paste', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

}
