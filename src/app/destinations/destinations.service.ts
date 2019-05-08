import {Destination} from './destination.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import { Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class DestinationsService {

  selectedDestination = new EventEmitter<Destination>();

  // private destinations: Destination[] = [
  //   new Destination('Baku', 'want to go there very much'),
  //   new Destination('Rome', 'want to visit'),
  //   new Destination('Tel-Aviv', 'would be nice to go there'),
  //   new Destination('New York', 'must visit!'),
  //   new Destination('Zurich', 'why not'),
  //   new Destination('San Fransisco', 'will be there in 2 years'),
  //   new Destination('Toronto', 'I will not die until I have not seen it!'),
  // ];

  constructor(private http: Http) {}

  // addNewDestination(location: string, note: string) {
  //   this.destinations.push(new Destination(location, note));
  //   console.log(this.destinations);
  // }

  // getDestinations(): Destination[] {
  //   return this.destinations.slice();
  // }

  storeDestination(destination: any) {
    return this.http.post('https://udemy-ng-http-2ec0e.firebaseio.com/data.json', destination);
  }

  createDestination(location: string, note: string): Destination {
    return new Destination(location, note);
  }

  getDestinations() {
    return this.http.get('http://localhost:8080/destinations')
      .pipe(map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      ))
  }

  markDestinationAsVisited() {

  }
}
