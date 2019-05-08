import { Component, OnInit } from '@angular/core';
import {Destination} from '../destination.model';
import {DestinationsService} from '../destinations.service';

@Component({
  selector: 'app-visited-destinations',
  templateUrl: './visited-destinations.component.html',
  styleUrls: ['./visited-destinations.component.css']
})
export class VisitedDestinationsComponent implements OnInit {

  destinations: Destination[];

  constructor(private destinationsService: DestinationsService) { }

  ngOnInit() {
    // this.destinations = this.destinationsService.getDestinations();
  }

}
