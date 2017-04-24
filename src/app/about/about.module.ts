import {NgModule, Component} from '@angular/core'
import {AboutComponent} from './about.component'
import {RouterModule} from '@angular/router'
// import {DetailsModule} from './detail/detail.module'

import {IntoComponent} from './into.component'

const router = [
	{
		path: '',
		component: AboutComponent,
		children: [
			{
				path: '',
				children:[
					{
						path: 'detail',
						component: IntoComponent,
					}
				]
			}
		]
	},
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
