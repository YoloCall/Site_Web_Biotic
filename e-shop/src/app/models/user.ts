export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
}

export class Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export class SignupData {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

export class LoginData {
  email: string;
  password: string;
}

/*
export class Product {
  id: string;
  inStock: boolean;
  titre: string;
  description: string;
  realisateurs: string;
  annee: number;
  pays: number;
  prix: number;
  qte: number;
  rating: [number];
}
*/

/*
export class Cart {
  lines: {[name: string]: CartItem};
  total: number;
  shippingCost: number;
  nbItems: number;
}

export class CartItem {
  product: Product;
  qty: number;
  itemTotal: number;
}
*/
