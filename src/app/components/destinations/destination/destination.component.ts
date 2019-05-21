import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Destination} from '../../../models/destination.model';
import {DestinationsService} from '../../../services/destinations.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  @Input() destination: Destination;

  closeResult: string;
  markDestinationAsVisited: FormGroup;

  constructor(private modalService: NgbModal,
              private destinationsService: DestinationsService) {}

  onSelected() {
    this.destinationsService.selectedDestination.emit(this.destination);
  }

  ngOnInit() {
    this.markDestinationAsVisited = new FormGroup({
      'visitedFrom': new FormControl(null, Validators.required),
      'visitedUntil': new FormControl(null, Validators.required),
      'destinationNote': new FormControl(null)
    })
  }

  onDelete(id: number) {
    this.destinationsService.deleteDestination(id).subscribe(
      (response) => {
        if (response) {
          this.ngOnInit();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit(id: number) {
    const visitedFrom = this.markDestinationAsVisited.value['visitedFrom'];
    const visitedUntil = this.markDestinationAsVisited.value['visitedUntil'];
    const note = this.markDestinationAsVisited['destinationNote'];

    this.destinationsService.markDestinationAsVisited(id).subscribe(
      (response) => {
        if (response) {
          this.ngOnInit();
        }
      },
      (error) => {
        console.log(error);
      }
    );

    this.modalService.dismissAll();
  }


  // from here -- pop-up modal --
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
