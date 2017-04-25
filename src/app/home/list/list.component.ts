import {Component} from '@angular/core'
import {Http} from '@angular/http'
import 'rxjs'
import {Service} from './list.service'

@Component({
    selector: 'list',
    template: require('./list.template.html'),
})

export class List extends Service{
    API: string = 'http://swapi.co/api/';

    constructor(http: Http){
        super()

        console.log(this.getAll());

        http.get(this.API).subscribe(res => {
            console.log(res, ' res');
        })

    }
}
