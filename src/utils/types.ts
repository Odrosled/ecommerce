export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: number;
  title: string;
}
export interface CartItem {
  product: Product;
  quantity: number;
}
