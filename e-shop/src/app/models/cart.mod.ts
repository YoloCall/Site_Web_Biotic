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
