import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeDestination(servers: any[]) {
    return this.http.post('http://localhost:8080/', servers);
  }
}
