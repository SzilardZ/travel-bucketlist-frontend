import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DestinationComponent } from './destinations/destination/destination.component';
import { NavigationComponent } from './navigation/navigation.component';
import {RouterModule, Routes} from '@angular/router';
import { DestinationsComponent } from './destinations/destinations.component';
import { AddNewDestinationComponent } from './destinations/add-new-destination/add-new-destination.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { VisitedDestinationsComponent } from './destinations/visited-destinations/visited-destinations.component';
import { HomeComponent } from './home/home.component';
import {DestinationsService} from './destinations/destinations.service';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'visited-destinations', component: VisitedDestinationsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DestinationComponent,
    NavigationComponent,
    DestinationsComponent,
    AddNewDestinationComponent,
    VisitedDestinationsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [DestinationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
