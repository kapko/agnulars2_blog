import {Component} from '@angular/core';
@Component({
  selector: 'about',
  template: `<h1>hello about component</h1>
  <ul>
    <li [routerLink]="['review']">review</li>
    <li [routerLink]="['info']">Info</li>
  </ul>
  <router-outlet></router-outlet>`
})
export class AboutComponent {}