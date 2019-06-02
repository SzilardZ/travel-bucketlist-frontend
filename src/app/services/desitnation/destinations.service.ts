import {Destination} from '../../models/destination.model';
import {EventEmitter, Injectable} from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from '../auth/token-storage/token-storage.service';

@Injectable({
  providedIn: 'root'
})

export class DestinationsService {

  selectedDestination = new EventEmitter<Destination>();

  constructor(private httpClient: HttpClient, private tokenStorage: TokenStorageService) {}

  storeDestination(destination: Destination) {
    return this.httpClient.post('http://localhost:8080/api/destinations/' + this.tokenStorage.getUsername() + '/add-destination', destination);
  }

  createDestination(location: string, note: string): Destination {
    return new Destination(location, note);
  }

  getDestinations() {
    return this.httpClient.get<Destination[]>('http://localhost:8080/api/destinations/' + this.tokenStorage.getUsername())
      .pipe(map(
        (destinations) => {
          return destinations;
        }
      ))
  }

  deleteDestination(id: number) {
    return this.httpClient.delete<string>('http://localhost:8080/api/destinations/delete-destination/' + this.tokenStorage.getUsername() + id);
  }

  markDestinationAsVisited(id: number) {
    return this.httpClient.put('http://localhost:8080/api/destinations/add-to-visited/' + this.tokenStorage.getUsername(), id);
  }

}
