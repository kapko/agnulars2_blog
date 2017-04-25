import {Component, NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'

@Component({
	selector: "detail",
	templateUrl: './detail.template.html'
})

export class DetailComponent{}
const routes = [
	{
		path: '',
		component: DetailComponent,
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	declarations: [DetailComponent]
})

export default class DetailsModule{}
