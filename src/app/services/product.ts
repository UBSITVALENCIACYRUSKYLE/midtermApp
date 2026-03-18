import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products = signal<Product[]>([
    { id: 1, name: 'Mechanical Gaming Keyboard', category: 'Electronics', price: 2599.00, stock: 40, status: 'In Stock', description: 'RGB mechanical keyboard for competitive gaming.', brand: 'Redragon', rating: 4.5 },
    { id: 2, name: 'Mobile Legends Diamonds x3000', category: 'Game Credits', price: 1500.00, stock: 999, status: 'In Stock', description: 'Top-up 3000 diamonds for your Mobile Legends account.', brand: 'Moonton', rating: 4.8 },
    { id: 3, name: 'PlayStation 5 Disc Edition', category: 'Console', price: 29995.00, stock: 2, status: 'Low Stock', description: "Sony's flagship console featuring 4K gaming.", brand: 'Sony', rating: 4.9 },
    { id: 4, name: 'Gaming Monobloc Chair', category: 'Furniture', price: 350.00, stock: 0, status: 'Out of Stock', description: 'Simple plastic chair with cushion for long gaming sessions.', brand: 'Generic', rating: 3.9 },
    { id: 5, name: 'Pork Chicharon (10pcs)', category: 'Snacks', price: 250.00, stock: 88, status: 'In Stock', description: 'Crunchy pork chicharon perfect for gaming snacks.', brand: 'Mang Juan', rating: 4.4 },
    { id: 6, name: 'Globe Prepaid Load Card P300', category: 'Load & Connectivity', price: 300.00, stock: 15, status: 'Low Stock', description: 'Prepaid load card for mobile data and gaming connectivity.', brand: 'Globe', rating: 4.2 },
    { id: 7, name: 'Razer Kraken Gaming Headset', category: 'Electronics', price: 3995.00, stock: 10, status: 'In Stock', description: 'High-quality surround sound gaming headset.', brand: 'Razer', rating: 4.7 },
    { id: 8, name: 'Mountain Dew 1.5L (6-pack)', category: 'Beverages', price: 420.00, stock: 0, status: 'Out of Stock', description: 'Popular soft drink enjoyed during long gaming sessions.', brand: 'Mountain Dew', rating: 4.3 },
    { id: 9, name: 'Portable USB Electric Fan', category: 'Accessories', price: 199.00, stock: 60, status: 'In Stock', description: 'USB powered portable fan to keep your gaming area cool.', brand: 'Firefly', rating: 4.1 },
    { id: 10, name: 'Gaming Tsinelas', category: 'Apparel', price: 85.00, stock: 34, status: 'In Stock', description: 'Comfortable slippers ideal for gaming at home.', brand: 'Islander', rating: 4.0 }
  ]);

  getProducts(): Product[] {
    return this.products();
  }

  getProductById(id: number): Product | undefined {
    return this.products().find(p => p.id === id);
  }

  search(query: string): Product[] {
    return this.products().filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.brand.toLowerCase().includes(query.toLowerCase())
    );
  }

  add(product: Product): void {
    this.products.update(list => [...list, product]);
  }

  updateProduct(updated: Product): void {
    this.products.update(list =>
      list.map(p => p.id === updated.id ? updated : p)
    );
  }

  delete(id: number): void {
    this.products.update(list => list.filter(p => p.id !== id));
  }
}