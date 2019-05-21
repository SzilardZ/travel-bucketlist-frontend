import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  userName = '';

  constructor(private auth: AuthService, private userService: UserService) { }

  ngOnInit() {
  }

  loggedIn(){
    return this.auth.isLogedIn();
  }

}
