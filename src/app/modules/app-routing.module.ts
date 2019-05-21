import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {VisitedDestinationsComponent} from '../components/destinations/visited-destinations/visited-destinations.component';
import {NgModule} from '@angular/core';
import {RegisterComponent} from '../components/auth/register/register.component';
import {LoginComponent} from '../components/auth/login/login.component';
import {AuthGuardService} from '../services/auth/auth-guard/auth-guard.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'visited-destinations', component: VisitedDestinationsComponent},
  {path: 'registration', component: RegisterComponent},
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
