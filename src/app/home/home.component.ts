import {Component, Inject} from '@angular/core';

@Component({
  selector: 'home',
  template: '<h1>Home page</h1> <list></list>'
})

export class HomeComponent {
  constructor(
    @Inject('PeopleService') private list,
  ){
    let useers = localStorage.getItem('users');
  }
}