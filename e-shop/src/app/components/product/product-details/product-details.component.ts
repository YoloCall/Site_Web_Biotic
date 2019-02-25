import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../../../entities/product.entity';
import { Subscription } from 'rxjs';
import { ProductService } from '../../../services/product.service';
import { ProductServiceDetails } from '../../../services/product-details.service';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [NgbModalConfig, NgbModal]
})

export class ProductDetailsComponent implements OnInit {

  data = 1;
  public product: Product ;
  private paramsSubscription: Subscription;
  constructor(
    config: NgbModalConfig,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private productServiceDetails: ProductServiceDetails,
    private route: ActivatedRoute,
    private modalService: NgbModal
    ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  closeResult: string;

  ngOnInit() {}

  fnAddNumber(): void {
    this.data += 1;
}
  deleteNumber(): void {
    this.data -= 1;
    if (this.data < 1) {
      this.data = 1;
    }
}

open(content: any) {
  this.modalService.open(content);
}


}
