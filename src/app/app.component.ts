import { Component } from '@angular/core';
import {AuthService} from './services/auth/auth.service';
import {TokenStorageService} from './services/auth/token-storage/token-storage.service';
import {UserService} from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'travel-bucketlist-frontend';

  constructor(private userService: UserService, private auth: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
  }

  loggedIn(){
    return this.auth.isLoggedIn();
  }

  getUsername() {
    return this.tokenStorage.getUsername();
  }
}
