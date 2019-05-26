import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DestinationsService} from '../desitnation/destinations.service';
import {TokenStorageService} from '../auth/token-storage/token-storage.service';
import {User} from '../../models/user.model';
import {UserInfo} from '../../utils/user-info';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/user/';

  constructor(private destinationsService: DestinationsService,
              private http: HttpClient,
              private tokenStorage: TokenStorageService) {

  }

  getUserFromDB() {
    return this.http.get<User>(this.baseUrl + this.tokenStorage.getUsername());
  }

  updateUserInfo(userInfo: UserInfo) {
    return this.http.put<User>(this.baseUrl + this.tokenStorage.getUsername(), userInfo);
  }

  deleteUserFromDB() {
    return this.http.delete<string>(this.baseUrl + this.tokenStorage.getUsername());
  }
}
