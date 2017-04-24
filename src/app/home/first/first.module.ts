import {NgModule, Component} from '@angular/core'
import {RouterModule} from '@angular/router'

@Component({
	selector: 'first',
	template: '<h1>First ROuter</h1>'
})

export class FirstComponent{}

const route = [
	{
		path: '',
		component: FirstComponent,
	}
]

@NgModule({
	imports:[
		RouterModule.forChild(route)

	],
	declarations: [FirstComponent]
})

export default class FirstModule{}
