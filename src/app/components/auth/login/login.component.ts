import { Component, OnInit } from '@angular/core';
import {AuthLoginInfo} from '../../../utils/login-info';
import {AuthService} from '../../../services/auth/auth.service';
import {TokenStorageService} from '../../../services/auth/token-storage/token-storage.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService,
              private router: Router,
              private tokenStorage: TokenStorageService) {}


  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required]),
    });
  }

  onSubmit(){
    const data = this.loginForm.value;
    const loginForm = new AuthLoginInfo(data['username'], data['password']);
    this.authService.attemptAuth(loginForm).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.authService.lodgedIn = true;
        console.log('OK');
        this.router.navigate(['/lodgings/rented']);
      },
      error => {
        console.log(error);

      }
    );
}
