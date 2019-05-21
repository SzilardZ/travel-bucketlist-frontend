import { Component, OnInit } from '@angular/core';
import {Destination} from '../../../models/destination.model';
import {DestinationsService} from '../../../services/destinations.service';

@Component({
  selector: 'app-visited-destinations',
  templateUrl: './visited-destinations.component.html',
  styleUrls: ['./visited-destinations.component.css']
})
export class VisitedDestinationsComponent implements OnInit {

  destinations: Destination[];

  constructor(private destinationsService: DestinationsService) { }

  ngOnInit() {
    this.destinationsService.getDestinations()
      .subscribe( response => {
        console.log(response);
        this.destinations = response;
      });
  }

}
