import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DestinationComponent } from './components/destinations/destination/destination.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {RouterModule, Routes} from '@angular/router';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { AddNewDestinationComponent } from './components/destinations/add-new-destination/add-new-destination.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { VisitedDestinationsComponent } from './components/destinations/visited-destinations/visited-destinations.component';
import { HomeComponent } from './components/home/home.component';
import {DestinationsService} from './services/destinations.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

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
    LoginComponent,
    RegisterComponent,
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
