import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BucketListComponent } from './bucket-list/bucket-list.component';
import { DestinationComponent } from './destinations/destination/destination.component';
import { NavigationComponent } from './navigation/navigation.component';
import {RouterModule} from '@angular/router';
import { DestinationsComponent } from './destinations/destinations.component';
import { AddNewDestinationComponent } from './destinations/add-new-destination/add-new-destination.component';
import { LoginModalComponent } from './modals/login-modal/login-modal.component';
import { AddNewDestinationModalComponent } from './modals/add-new-destination-modal/add-new-destination-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BucketListComponent,
    DestinationComponent,
    NavigationComponent,
    DestinationsComponent,
    AddNewDestinationComponent,
    LoginModalComponent,
    AddNewDestinationModalComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
