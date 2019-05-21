import {Destination} from '../../models/destination.model';
import {EventEmitter, Injectable} from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DestinationsService {

  selectedDestination = new EventEmitter<Destination>();

  constructor(private httpClient: HttpClient) {}

  storeDestination(destination: any) {
    return this.httpClient.post('http://localhost:8080/add-destination', destination);
  }

  createDestination(location: string, note: string): Destination {
    return new Destination(location, note);
  }

  getDestinations() {
    return this.httpClient.get<Destination[]>('http://localhost:8080/destinations')
      .pipe(map(
        (destinations) => {
          return destinations;
        }
      ))
      .pipe(catchError(
        (error: Response) => {
          return Observable.throw('Something went wrong!');
        }
      ))
  }

  deleteDestination(id: number) {
    return this.httpClient.delete<string>('http://localhost:8080/delete-destination/' + id);
  }

  markDestinationAsVisited(id: number) {
    console.log('UUUUUUUU ' + id);
    return this.httpClient.put('http://localhost:8080/add-to-visited/', id);
  }

}
