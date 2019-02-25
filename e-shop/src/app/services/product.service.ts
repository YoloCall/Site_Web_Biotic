import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { TestBed } from '@angular/core/testing';

@Injectable()
export class ProductService {

    baseUrl = 'http://localhost:3000/products';

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

/*
    getOneProduct(id: number): Observable<Product> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.get<Product>(url).pipe(
        tap(_ => console.log(`fetched product id=${id}`)),
        catchError(this.handleError<Product>(`getProduct id=${id}`))
      );
    }
*/
    private getSelectedIndex(id: string) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                return i;
            }
        }
        return -1;
    }

}
