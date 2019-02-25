import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { Product } from '../../entities/product.entity';
import { ProductService } from '../../services/product.service';
@Component({
      templateUrl: 'product.component.html',
      styleUrls: [ 'product.component.css' ]
})
export class ProductComponent implements OnInit {

      private products: Product[];
      private p: Product ;
      private paramsSubscription: Subscription;
      constructor( private productService: ProductService,
                   private route: ActivatedRoute,
                   private cartService: CartService,
                   private router: Router
        ) { }

      ngOnInit() {
        const key = 'products';

        this.productService.getAllPosts()
            .subscribe(
                  data => {
                        this.products = data[key];
                  },
                  errorCode => console.log(errorCode)
            );
      }

      onNotify(rate: number, product: Product): void {
            product.rates.push(rate);

            // mise à jour de la base mongo avec productService.updateRate
            this.productService.updateRate(product);

      }


      addToCart(product: Product): void {
         console.log('Product.component Produit ajouté au Caddie:', product.name);
         this.cartService.addOne(product.id);
         // this.router.navigate(['/cart']);
      }

      addToHeart(product: Product): void {
        console.log('Coup de coeur pour le produit:', product.id);
       // this.cartService.addProduct(product);
        // this.router.navigate(['/cart/']);
     }

     GoDetails(product: Product) {
      console.log('On doit afficher le produit dans la bonne page:', product.id);
     // this.cartService.addProduct(product);
      this.router.navigate(['/product-details/' + product.id]);
   }
}
