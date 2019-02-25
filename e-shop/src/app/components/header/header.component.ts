import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../entities/user.entity';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [CartService, NgbAlertConfig]
})
export class HeaderComponent implements OnInit {
  isNavbarCollapsed = true;
  // loggedInUser = false;

  @Input() public alerts: Array<string> = [];
  carQuantity = 0;

  constructor(alertConfig: NgbAlertConfig, private session : SessionService) {
// customize default values of alerts used by this component tree
    alertConfig.type = 'sucess';
  }

  ngOnInit() {
  }

  currentUser: User;

  onLogOut() {
      this.session.setstatus(false);
    }

}
