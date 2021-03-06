import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DestinationComponent } from './components/destinations/destination/destination.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { AddNewDestinationComponent } from './components/destinations/add-new-destination/add-new-destination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VisitedDestinationsComponent } from './components/destinations/visited-destinations/visited-destinations.component';
import { HomeComponent } from './components/home/home.component';
import { DestinationsService } from './services/desitnation/destinations.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
// import { UserComponent } from './components/user/user.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import {httpInterceptorProviders} from './security/auth-interceptor';


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
    // UserComponent,
    LogoutComponent,
    UserEditComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DestinationsService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
