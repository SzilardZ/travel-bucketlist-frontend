import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user/user.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserInfo} from '../../../utils/user-info';
import {PasswordMatcher} from '../../../utils/passwordMatcher';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private authService: AuthService) { }

  editUserForm: FormGroup;

  ngOnInit() {
    this.editUserForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      'first_name': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      'last_name': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'password_confirmation': new FormControl(null, [Validators.required, Validators.minLength(8)]),
    }, PasswordMatcher.MatchPassword);
  }

  onSubmit(){

    const data = this.editUserForm.value;
    const signUpFOrm = new UserInfo(
      data['username'],
      data['first_name'],
      data['last_name'],
      data['email'],
      data['password']
    );

    console.log(data);
    this.authService.signUp(signUpFOrm).subscribe(
      data => {
        this.router.navigate(['/login']);

      },
      error => {
        console.log(error);

      }
    );
  }

}
