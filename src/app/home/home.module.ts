import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {HomeComponent} from './home.component'
import {List} from './list/list.component'
import {CommonModule} from '@angular/common'

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
		CommonModule,
		RouterModule.forChild(routes),
	],
	exports: [List],
	declarations:[HomeComponent, List]
})

export default class HomeModule{}
