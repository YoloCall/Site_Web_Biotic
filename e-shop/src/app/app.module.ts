import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductService } from './services/product.service';
import { ProductServiceDetails } from './services/product-details.service';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgbdRatingComponent } from './components/product/ngbd-rating/ngbd-rating.component';
import { CheckoutComponent } from './components/checkout/checkout.component';


import { LoginComponent } from './components/login/login.component';

import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { PaiementComponent } from './components/cart/paiement/paiement.component';
import { ConfirmationPaiementComponent } from './components/cart/confirmation-paiement/confirmation-paiement.component';
import { GrdFilterPipe } from './grd-filter.pipe';
import { CartService } from './services/cart.service';
import { UserLogComponent } from './components/userlog/userlog.component';



@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    NgbdRatingComponent,
    CheckoutComponent,
    LoginComponent,
    ProductDetailsComponent,
    PaiementComponent,
    ConfirmationPaiementComponent,
    GrdFilterPipe,
    UserLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [ ProductService , CartService , ProductServiceDetails],
  bootstrap: [AppComponent]
})
export class AppModule { }
