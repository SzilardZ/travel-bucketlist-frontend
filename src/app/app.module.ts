import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DestinationComponent } from './destinations/destination/destination.component';
import { NavigationComponent } from './navigation/navigation.component';
import {RouterModule} from '@angular/router';
import { DestinationsComponent } from './destinations/destinations.component';
import { AddNewDestinationComponent } from './destinations/add-new-destination/add-new-destination.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DestinationComponent,
    NavigationComponent,
    DestinationsComponent,
    AddNewDestinationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
