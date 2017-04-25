import {NgModule, Component} from '@angular/core'
import {AboutComponent} from './about.component'
import {RouterModule} from '@angular/router'
import {Info} from './info/info.component'
import {Review} from './review/revew.component'
const router = [
	{
		path: '',
		component: AboutComponent,
		children:[
			{
				path: 'info',
				component: Info,
			},
			{
				path: 'review',
				component: Review
			}
		]
	}
]

@NgModule({
	imports: [
		RouterModule.forChild(router),
	],
	declarations: [
		Info,
		Review,
		AboutComponent,
	]
})

export default class AboutModule{}
