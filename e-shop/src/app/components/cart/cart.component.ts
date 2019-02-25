import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../entities/product.entity';
import { Item } from '../../entities/item.entity';
import { ProductService } from '../../services/product.service';
import { of } from 'rxjs/internal/observable/of';


@Component({
  templateUrl: 'index.component.html'
})

export class CartComponent implements OnInit {

  private items: Item[] = [];
  private total = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
    
  ) { }

    ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
        const id = params.id;
        if (id) {
          const item: Item = {
            product: this.productService.find(id),
            quantity: 1
          };
          if (localStorage.getItem('cart') == null) {
            const cart: any = [];
            cart.push(JSON.stringify(item));
            localStorage.setItem('cart', JSON.stringify(cart));
          } else {
            const cart: any = JSON.parse(localStorage.getItem('cart'));
            let index = -1;
            for (let i = 0; i < cart.length; i++) {
              const item: Item = JSON.parse(cart[i]);
              if (item.product.id === id) {
                index = i;
                break;
              }
            }
            if (index === -1) {
              cart.push(JSON.stringify(item));
              localStorage.setItem('cart', JSON.stringify(cart));
            } else {
              const item: Item = JSON.parse(cart[index]);
              item.quantity += 1;
              cart[index] = JSON.stringify(item);
              localStorage.setItem('cart', JSON.stringify(cart));
            }
          }
          this.loadCart();
        } else {
          // this.loadCart();
        }
      });
    }
  


    loadCart(): void {
      this.total = 0;
      this.items = [];
      const cart = JSON.parse(localStorage.getItem('cart'));

      // tslint:disable-next-line:prefer-for-of
      for  (let i = 0; i < cart.length; i++) {
        const item = JSON.parse(cart[i]);
        this.items.push({
          product: item.product,
          quantity: item.quantity
        });
        this.total += item.product.price * item.quantity;
      }
    }

    remove(id: string): void {
      const cart: any = JSON.parse(localStorage.getItem('cart'));
      const index = -1;
      for (let i = 0; i < cart.length; i++) {
        const item: Item = JSON.parse(cart[i]);
        if (item.product.id === id) {
          cart.splice(i, 1);
          break;
        }
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      this.loadCart();
    }


}
