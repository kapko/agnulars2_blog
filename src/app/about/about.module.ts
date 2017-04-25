import {NgModule, Component} from '@angular/core'
import {AboutComponent} from './about.component'
import {RouterModule} from '@angular/router'

const router = [
	{
		path: '',
		component: AboutComponent,
	}
]

@NgModule({
	imports: [
		RouterModule.forChild(router),
	],
	declarations: [
		// IntoComponent,
		AboutComponent,
	]
})

export default class AboutModule{}
