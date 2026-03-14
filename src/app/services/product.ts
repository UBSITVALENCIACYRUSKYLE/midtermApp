import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
    id: 1,
    name: 'Mechanical Gaming Keyboard',
    category: 'Electronics',
    price: 2599.00,
    stock: 40,
    status: 'In Stock',
    description: 'RGB mechanical keyboard for competitive gaming. Clicky switches for responsive typing.',
    brand: 'Redragon',
    rating: 4.5
  },
  {
    id: 2,
    name: 'Mobile Legends Diamonds x3000',
    category: 'Game Credits',
    price: 1500.00,
    stock: 999,
    status: 'In Stock',
    description: 'Top-up 3000 diamonds for your Mobile Legends account.',
    brand: 'Moonton',
    rating: 4.8
  },
  {
    id: 3,
    name: 'PlayStation 5 Disc Edition',
    category: 'Console',
    price: 29995.00,
    stock: 2,
    status: 'Low Stock',
    description: 'Sony’s flagship console featuring 4K gaming, ray tracing, and ultra-fast SSD.',
    brand: 'Sony',
    rating: 4.9
  },
  {
    id: 4,
    name: 'Gaming Monobloc Chair',
    category: 'Furniture',
    price: 350.00,
    stock: 0,
    status: 'Out of Stock',
    description: 'Simple plastic chair with cushion for long gaming sessions.',
    brand: 'Generic',
    rating: 3.9
  },
  {
    id: 5,
    name: 'Pork Chicharon (10pcs)',
    category: 'Snacks',
    price: 250.00,
    stock: 88,
    status: 'In Stock',
    description: 'Crunchy pork chicharon perfect for gaming snacks.',
    brand: 'Mang Juan',
    rating: 4.4
  },
  {
    id: 6,
    name: 'Globe Prepaid Load Card P300',
    category: 'Load & Connectivity',
    price: 300.00,
    stock: 15,
    status: 'Low Stock',
    description: 'Prepaid load card for mobile data and gaming connectivity.',
    brand: 'Globe',
    rating: 4.2
  },
  {
    id: 7,
    name: 'Razer Kraken Gaming Headset',
    category: 'Electronics',
    price: 3995.00,
    stock: 10,
    status: 'In Stock',
    description: 'High-quality surround sound gaming headset.',
    brand: 'Razer',
    rating: 4.7
  },
  {
    id: 8,
    name: 'Mountain Dew 1.5L (6-pack)',
    category: 'Beverages',
    price: 420.00,
    stock: 0,
    status: 'Out of Stock',
    description: 'Popular soft drink often enjoyed during long gaming sessions.',
    brand: 'Mountain Dew',
    rating: 4.3
  },
  {
    id: 9,
    name: 'Portable USB Electric Fan',
    category: 'Accessories',
    price: 199.00,
    stock: 60,
    status: 'In Stock',
    description: 'USB powered portable fan to keep your gaming area cool.',
    brand: 'Firefly',
    rating: 4.1
  },
  {
    id: 10,
    name: 'Gaming Tsinelas',
    category: 'Apparel',
    price: 85.00,
    stock: 34,
    status: 'In Stock',
    description: 'Comfortable slippers ideal for gaming at home.',
    brand: 'Islander',
    rating: 4.0
  }
  ];

  selectedProduct: Product | null = null;
  showModal: boolean = false;

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  updateProduct(updated: Product): void {
    const idx = this.products.findIndex(p => p.id === updated.id);
    if (idx !== -1) this.products[idx] = { ...updated };
  }

  openModal(product: Product): void {
    this.selectedProduct = { ...product };
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedProduct = null;
  }
}