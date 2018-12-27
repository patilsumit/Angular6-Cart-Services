import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AssignmentComponent } from './assignment/assignment.component';
import {CartServices} from './assignment.service';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CartServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
