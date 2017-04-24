import { NgModule, Component} from '@angular/core'
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'home',
  template: '<h1>Home Component</h1>'
})

export class HomeComponent{}


@Component({
  selector: 'about',
  template: '<h1>About Component</h1>'
})

export class AboutComponent{}


const routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
