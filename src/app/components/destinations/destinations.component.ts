import {Component, OnInit} from '@angular/core';
import {DestinationsService} from '../../services/destinations.service';
import {Destination} from '../../models/destination.model';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css'],
})
export class DestinationsComponent implements OnInit {

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
