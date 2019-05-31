import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DestinationsService} from '../../../services/desitnation/destinations.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-new-destination',
  templateUrl: './add-new-destination.component.html',
  styleUrls: ['./add-new-destination.component.css']
})
export class AddNewDestinationComponent implements OnInit {

  closeResult: string;
  addNewDestination: FormGroup;

  constructor(private modalService: NgbModal,
              private destinationsService: DestinationsService,
              private router: Router) {}

  ngOnInit() {
    this.addNewDestination = new FormGroup({
      'destinationTitle': new FormControl(null, Validators.required),
      'destinationNote': new FormControl(null),
    })
  }

  onSubmit() {
    const title = this.addNewDestination.value['destinationTitle'];
    console.log(this.addNewDestination.value);
    const note = this.addNewDestination.value['destinationNote'];
    const destination = this.destinationsService.createDestination(title, note);
    this.destinationsService.storeDestination(destination)
      .subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/destinations']);
        },
        (error) => {
          console.log(error);
        }
      );


    this.modalService.dismissAll();

  }

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
