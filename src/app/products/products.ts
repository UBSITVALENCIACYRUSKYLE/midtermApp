import { Component } from '@angular/core';
import { Products } from '../models/product.interfaces';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Product {
  selectedProduct: Products | null = null;
  showModal: boolean = false;

  product: Products[] = [
    { id: 1, name: 'Mechanical Gaming Keyboard', category: 'Electronics', price: 2599.00, stock: 40, status: 'In Stock', description: 'RGB mechanical keyboard na pang-competitive gaming. Clicky switches para ramdam mo ang bawat keypress, idol.' },
    { id: 2, name: 'Mobile Legends Bang Bang Diamonds x3000', category: 'Game Credits', price: 1500.00, stock: 999, status: 'In Stock', description: 'Top-up ng 3000 diamonds para sa iyong paboritong MLBB account. Pang-skin ni Fanny o Chou, ikaw bahala.' },
    { id: 3, name: 'PlayStation 5 Disc Edition', category: 'Console', price: 29995.00, stock: 2, status: 'Low Stock', description: 'Sony\'s flagship console na available na sa Pilipinas. 4K gaming, ray tracing, at ultra-fast SSD. Bihirang makita sa SM, kumilos na!'},
    { id: 4, name: 'Gaming Monobloc Chair (may unan)', category: 'Furniture', price: 350.00, stock: 0, status: 'Out of Stock', description: 'Classic na puting monobloc na may dagdag na unan para sa matagal na session. Ginagamit ng mga Pinoy pro-gamer simula pa noong unang panahon year(2015).'},
    { id: 5, name: 'Pork Chicharon (Bulkbuy 10pcs)', category: 'Snacks', price: 250.00, stock: 88, status: 'In Stock', description: 'Hindi kumpleto ang gaming session ng walang chicharon. Crunchy, maalat, at perpektong kasama ng Mountain Dew.'},
    { id: 6, name: 'Globe Prepaid Load Card P300', category: 'Load & Connectivity', price: 300.00, stock: 15, status: 'Low Stock', description: 'Para sa unlimited data ng mobile gaming. Huwag matanggal sa laro dahil sa maubusan ng data, lodi.'},
    { id: 7, name: 'Razer Kraken Gaming Headset', category: 'Electronics', price: 3995.00, stock: 10, status: 'In Stock', description: 'Surround sound headset para marinig mo ang yapak ng kalaban sa CS2 o Valorant. Sukat na pang-Filipino head.'},
    { id: 8, name: 'Mountain Dew 1.5L (6-pack)', category: 'Beverages', price: 420.00, stock: 0, status: 'Out of Stock', description: 'Opisyal na inumin ng lahat ng Pinoy gamer. Laging ubos sa tindahan pag sale sa Steam.'},
    { id: 9, name: 'Portable Electric Fan (USB)', category: 'Accessories', price: 199.00, stock: 60, status: 'In Stock', description: 'Para hindi mag-overheat ang PC mo at ikaw mismo. Kailangan sa gaming den na walang aircon pero may malakas na PC.'},
    { id: 10, name: 'Tsinelas (Pang-gaming Edition)', category: 'Apparel', price: 85.00, stock: 34, status: 'In Stock', description: 'Komportableng tsinelas para sa matagal na gaming session sa bahay. Hindi na kailangan ng sapatos pag nasa kwarto ka lang, pre.' }
  ];

  viewProductDetails(p: Products) {
    this.selectedProduct = p;
    this.showModal = true;
  }
}