import { NgModule, Component} from '@angular/core'
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {Routes} from './app.router'
import {PeopleService} from './API/people.service'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(Routes),
  ],
  providers:[
    {
      provide: 'PeopleService',
      useClass: PeopleService
    },
    {
      provide: 'userName',
      useValue: 'Kapko bbatyr',
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
