import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthLoginInfo} from '../../utils/login-info';
import {Observable} from 'rxjs';
import {SignUpInfo} from '../../utils/signup-info';
import {JwtResponse} from '../../security/jwt-response';
import {TokenStorageService} from './token-storage/token-storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/signup';
  private _lodgedIn = false;

  constructor(private http: HttpClient, private token: TokenStorageService) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

  isLogedIn(){
    return this.token.getToken() !== null;
  }

  set lodgedIn(value: boolean) {
    this._lodgedIn = value;
  }

  signOut() {
    window.sessionStorage.clear();
    this.lodgedIn = false;
  }
}
