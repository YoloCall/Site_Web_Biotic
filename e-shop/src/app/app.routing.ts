import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { PaiementComponent } from './components/cart/paiement/paiement.component';
import { ConfirmationPaiementComponent} from './components/cart/confirmation-paiement/confirmation-paiement.component';
import { UserLogComponent } from './components/userlog/userlog.component';


const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'home', component: HomeComponent },
{ path: 'userlog', component: UserLogComponent },
{ path: 'login', component: LoginComponent },
{ path: 'products', component: ProductComponent },
{ path: 'cart', component: CartComponent },
{ path: 'checkout', component: CheckoutComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'login', component: LoginComponent },
{ path: 'product-details/:id', component: ProductDetailsComponent } ,
{ path: 'paiement', component: PaiementComponent },
{ path: 'confirmation-paiement', component: ConfirmationPaiementComponent },
{ path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
