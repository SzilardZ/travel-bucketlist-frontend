import { Component, OnInit } from '@angular/core';
import {DestinationsService} from './destinations.service';
import {Destination} from './destination.model';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css'],
  // providers: [DestinationsService]

})
export class DestinationsComponent implements OnInit {

  destinations: Destination[];

  constructor(private destinationsService: DestinationsService) { }

  ngOnInit() {
    this.destinationsService.getDestinations()
      .subscribe(
        (destinations: any[]) => this.destinations = destinations,
      );

    // this.destinationsService.getDestinations()
    //   .subscribe(
    //     (response) => console.log(response),
    //     (error) => console.log(error)
    //   );
  }

}
