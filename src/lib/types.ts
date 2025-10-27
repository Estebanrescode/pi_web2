export type Product = {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  category?: string;
  // otros alias que puedan aparecer en la API
  precio?: number;
};

export type CartItem = Product & { quantity: number };

export type OrderDetail = {
  id: number;
  product: Product;
  quantity: number;
  price: number;
};

export type Order = {
  id: number;
  status: string;
  orderDate: string;
  totalAmount: number;
  orderDetails: OrderDetail[];
};
