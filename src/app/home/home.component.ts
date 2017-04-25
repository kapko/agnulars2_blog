import {Component, Inject} from '@angular/core';

@Component({
  selector: 'home',
  template: '<h1>About page</h1> <list></list>'
})

export class HomeComponent {
  constructor(
    @Inject('PeopleService') private list,
  ){

    localStorage.setItem('users', ' users, users1');
    let useers = localStorage.getItem('users');
  }
}