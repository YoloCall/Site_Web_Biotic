import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngbd-rating',
  templateUrl: './ngbd-rating.component.html',
  styleUrls: ['./ngbd-rating.component.css']
})
export class NgbdRatingComponent implements OnInit {

  currentRate = 5;

  @Output() notify: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.notify.emit(this.currentRate);
  }

}
