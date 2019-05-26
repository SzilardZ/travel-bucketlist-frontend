import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PasswordMatcher} from '../../../utils/passwordMatcher';
import {UserInfo} from '../../../utils/user-info';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  private _user: User;
  private editUserForm: FormGroup;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.userService.getUserFromDB().subscribe(
      (response) => {
        console.log(response);
        this._user = response;
        this.setEditFormValues();
      },
      (error) => {
        console.log(error);
      }
    );

    this.editUserForm = new FormGroup({
      'first_name': new FormControl(null, [Validators.required]),
      'last_name': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null ),
      'password_confirmation': new FormControl(null),
    }, PasswordMatcher.MatchPassword);
  }

  onSubmit() {

    const data = this.editUserForm.value;
    console.log(data);
    const userInfo = new UserInfo('notuse',
      data['first_name'],
      data['last_name'],
      data['email'],
      data['password']
    );

    this.userService.updateUserInfo(userInfo).subscribe(
      (response) => {
        if (response) { this.router.navigate(['/user']); }
      },
      (error) => {
        console.log(error);
      }
    );
  }


  get user(): User {
    return this._user;
  }

  private setEditFormValues() {
    this.editUserForm.patchValue({
      'first_name': this._user.firstName,
      'surname': this._user.lastName,
      'email': this._user.email,
    });
  }
}
