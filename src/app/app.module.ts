import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BucketListComponent } from './bucket-list/bucket-list.component';
import { DestinationComponent } from './destination/destination.component';
import { NavigationComponent } from './navigation/navigation.component';
import {RouterModule} from '@angular/router';
import { DestinationsComponent } from './destinations/destinations.component';

@NgModule({
  declarations: [
    AppComponent,
    BucketListComponent,
    DestinationComponent,
    NavigationComponent,
    DestinationsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
