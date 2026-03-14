import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    { id: 1, name: 'Mechanical Gaming Keyboard', category: 'Electronics', price: 2599.00, stock: 40, status: 'In Stock', description: 'RGB mechanical keyboard na pang-competitive gaming. Clicky switches para ramdam mo ang bawat keypress, idol.', brand: 'KeyMaster', rating: 4.5, imageUrl: '' },
    { id: 2, name: 'Mobile Legends Bang Bang Diamonds x3000', category: 'Game Credits', price: 1500.00, stock: 999, status: 'In Stock', description: 'Top-up ng 3000 diamonds para sa iyong paboritong MLBB account. Pang-skin ni Fanny o Chou, ikaw bahala.', brand: 'Moonton', rating: 4.8, imageUrl: '' },
    { id: 3, name: 'PlayStation 5 Disc Edition', category: 'Console', price: 29995.00, stock: 2, status: 'Low Stock', description: 'Sony\'s flagship console na available na sa Pilipinas. 4K gaming, ray tracing, at ultra-fast SSD.', brand: 'Sony', rating: 4.9, imageUrl: '' },
    { id: 4, name: 'Gaming Monobloc Chair (may unan)', category: 'Furniture', price: 350.00, stock: 0, status: 'Out of Stock', description: 'Classic na puting monobloc na may dagdag na unan para sa matagal na session.', brand: 'Monobloc', rating: 3.8, imageUrl: '' },
    { id: 5, name: 'Pork Chicharon (Bulkbuy 10pcs)', category: 'Snacks', price: 250.00, stock: 88, status: 'In Stock', description: 'Hindi kumpleto ang gaming session ng walang chicharon. Crunchy, maalat, at perpektong kasama ng Mountain Dew.', brand: 'Lapid\'s', rating: 4.7, imageUrl: '' },
    { id: 6, name: 'Globe Prepaid Load Card P300', category: 'Load & Connectivity', price: 300.00, stock: 15, status: 'Low Stock', description: 'Para sa unlimited data ng mobile gaming. Huwag matanggal sa laro dahil sa maubusan ng data, lodi.', brand: 'Globe', rating: 4.2, imageUrl: '' },
    { id: 7, name: 'Razer Kraken Gaming Headset', category: 'Electronics', price: 3995.00, stock: 10, status: 'In Stock', description: 'Surround sound headset para marinig mo ang yapak ng kalaban sa CS2 o Valorant.', brand: 'Razer', rating: 4.6, imageUrl: '' },
    { id: 8, name: 'Mountain Dew 1.5L (6-pack)', category: 'Beverages', price: 420.00, stock: 0, status: 'Out of Stock', description: 'Opisyal na inumin ng lahat ng Pinoy gamer. Laging ubos sa tindahan pag sale sa Steam.', brand: 'Mountain Dew', rating: 4.9, imageUrl: '' },
    { id: 9, name: 'Portable Electric Fan (USB)', category: 'Accessories', price: 199.00, stock: 60, status: 'In Stock', description: 'Para hindi mag-overheat ang PC mo at ikaw mismo. Kailangan sa gaming den na walang aircon.', brand: 'Hanabishi', rating: 4.1, imageUrl: '' },
    { id: 10, name: 'Tsinelas (Pang-gaming Edition)', category: 'Apparel', price: 85.00, stock: 34, status: 'In Stock', description: 'Komportableng tsinelas para sa matagal na gaming session sa bahay.', brand: 'Spartan', rating: 4.3, imageUrl: '' }
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