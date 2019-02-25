import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']

})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  phone: string;
  message: string;
  city: string;
  submited: boolean;

cities = [
    { id: 1, name: 'Service Clients' },
    { id: 2, name: 'Partenariat' },
    { id: 3, name: 'Presse'},
    { id: 4, name: 'Recrutement'}
];

selectedCityId: number = null;
closeResult: string;
MESSAGE_DATA: any;

  onSubmit() {return this.submited = true;

  } // doit afficher le message dans la div success....... !!
  constructor(private modalService: NgbModal) {}



  ngOnInit() {
    this.selectedCityId = this.cities[0].id;
  }

  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}. My phone is ${this.phone}`;
    return allInfo;
}

open(content) {
  this.MESSAGE_DATA = `
  My city is ${this.city}.
  My name is ${this.name}.
  My email is ${this.email}.
  My message is ${this.message}.
  My phone is ${this.phone}`;

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

