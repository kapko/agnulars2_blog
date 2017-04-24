import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {HomeComponent} from './home.component'
const routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'first',
		loadChildren: './first/first.module.ts'
	},
]

@NgModule({
	imports: [
		RouterModule.forChild(routes),
	],
	declarations:[HomeComponent]
})

export default class HomeModule{}
