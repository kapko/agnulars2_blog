import {Component, Inject} from '@angular/core'
import {Http} from '@angular/http'
import 'rxjs'

@Component({
    selector: 'list',
    template: require('./list.template.html'),
})

export class List{
    API: string = 'http://swapi.co/api/';

    constructor(
        http: Http,
        @Inject('PeopleService') private list,
        ){
            console.log(localStorage.getItem('users'));

        http.get(this.API).subscribe(res => {
            console.log(res, ' res');
        })

    }
}
