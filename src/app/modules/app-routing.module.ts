import {RouterModule, Routes} from '@angular/router';
import {VisitedDestinationsComponent} from '../components/destinations/visited-destinations/visited-destinations.component';
import {NgModule} from '@angular/core';
import {RegisterComponent} from '../components/auth/register/register.component';
import {LoginComponent} from '../components/auth/login/login.component';
import {AuthGuardService} from '../services/auth/auth-guard/auth-guard.service';
import {LogoutComponent} from '../components/auth/logout/logout.component';

const appRoutes: Routes = [
  {path: 'visited-destinations', component: VisitedDestinationsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', canActivate: [AuthGuardService], component: LogoutComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
