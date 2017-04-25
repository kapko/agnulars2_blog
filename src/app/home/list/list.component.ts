import {Component, Inject} from '@angular/core'
import {Http} from '@angular/http'
import 'rxjs'

@Component({
    selector: 'list',
    template: require('./list.template.html'),
})

export class List{
    API: string = 'http://swapi.co/api/films';
    films: any = [];

    constructor(
        http: Http,
        @Inject('PeopleService') private list,
        ){

        http.get(this.API).subscribe(res => {
           this.films = res.json().results;
        })
    }

    link(e){
        console.log(e, ' e');
        let link = e.match(/\d+/ig)[0];
    }
}
