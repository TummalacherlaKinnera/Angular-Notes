import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { Server1Component } from './PropertyAndEventBindingExamples/server1.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { Assignment2Component } from './assignment2/assignment2.component';

import { InbuiltdirectivesComponent } from './inbuiltdirectives/inbuiltdirectives.component';
import { Assignment3Component } from './assignment3/assignment3.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    Server1Component,
    TwoWayDataBindingComponent,
    Assignment2Component,
    
    InbuiltdirectivesComponent,
         Assignment3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
