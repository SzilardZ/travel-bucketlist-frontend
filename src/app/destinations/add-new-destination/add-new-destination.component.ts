import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-destination',
  templateUrl: './add-new-destination.component.html',
  styleUrls: ['./add-new-destination.component.css']
})
export class AddNewDestinationComponent implements OnInit {

  private loadNewDestinationModal: boolean;

  constructor() { }

  ngOnInit() {
  }

  loadAddNewDestinationModal() {
    this.loadNewDestinationModal = true;
  }
}
