import {Destination} from './destination.model';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DestinationsService {

  selectedDestination = new EventEmitter<Destination>();

  private destinations: Destination[] = [
    new Destination('Baku', 'want to go there very much'),
    new Destination('Rome', 'want to visit'),
    new Destination('Tel-Aviv', 'would be nice to go there'),
    new Destination('New York', 'must visit!'),
    new Destination('Zurich', 'why not'),
    new Destination('San Fransisco', 'will be there in 2 years'),
    new Destination('Toronto', 'I will not die until I have not seen it!'),
  ];

  addNewDestination(location: string, note: string) {
    this.destinations.push(new Destination(location, note));
    console.log(this.destinations);
  }

  getDestinations(): Destination[] {
    return this.destinations.slice();
  }

}
