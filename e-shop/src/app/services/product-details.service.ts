import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { TestBed } from '@angular/core/testing';

@Injectable()
export class ProductServiceDetails {

    baseUrl = 'http://localhost:3000/product-details';

    private products: Product[];

    constructor(private http: HttpClient) { }

    getAllPosts(): Observable<Product[]> {

        return this.http.get<Product[]>(this.baseUrl);

    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    updateRate(product: Product) {
        console.log(product);
        this.http.put<Product>(this.baseUrl, product);
    }

    getProduct(product: Product) {
      console.log(product);
      this.http.get<Product>(this.baseUrl);
  }

    private getSelectedIndex(id: string) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                return i;
            }
        }
        return -1;
    }

}
