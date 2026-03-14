import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.interface';
import { ProductService } from './product';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {

  searchId: number | null = null;
  selectedProduct: Product | null = null;
  searchResult: Product | null = null;
  updateMessage: string = '';

  constructor(public productService: ProductService) {}

  getProducts(): Product[] {
    return this.productService.getProducts();
  }

  viewProduct(product: Product): void {
    this.selectedProduct = this.selectedProduct?.id === product.id ? null : { ...product };
  }

  searchProduct(): void {
    if (this.searchId !== null) {
      const found = this.productService.getProductById(this.searchId);
      this.searchResult = found ? { ...found } : null;
      this.updateMessage = found ? '' : 'Product not found.';
    }
  }

  saveUpdate(): void {
    if (this.searchResult) {
      this.productService.updateProduct(this.searchResult);
      this.updateMessage = 'Product updated successfully!';
    }
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('auth_token');
  }

  login(): void { sessionStorage.setItem('auth_token', 'demo-token'); }
  logout(): void { sessionStorage.removeItem('auth_token'); }
}