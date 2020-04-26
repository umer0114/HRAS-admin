import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'hras-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <hras-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </hras-one-column-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
