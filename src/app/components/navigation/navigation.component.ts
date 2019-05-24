import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {UserService} from '../../services/user/user.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  private _user: User;

  constructor(private auth: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserFromDB().subscribe(
      (response) => {
        console.log(response);
        this._user = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loggedIn(){
    return this.auth.isLoggedIn();
  }

}
