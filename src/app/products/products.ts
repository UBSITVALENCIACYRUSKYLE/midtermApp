import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product.interface';
import { ProductsListComponent } from './products-list/products-list';
import { ProductDetailsComponent } from './product-details/product-details';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductsListComponent, ProductDetailsComponent],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent implements OnInit {

  selectedProduct: Product | null = null;
  showModal: boolean = false;

  searchId: number | null = null;
  selectedSearchProduct: Product | null = null;
  updateMessage: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  onProductSelected(product: Product): void {
    this.selectedProduct = { ...product };
    this.showModal = true;
  }

  onModalClosed(): void {
    this.showModal = false;
    this.selectedProduct = null;
  }

  searchProduct(): void {
    if (this.searchId !== null) {
      const found = this.productService.getProductById(this.searchId);
      this.selectedSearchProduct = found ? { ...found } : null;
      this.updateMessage = found ? '' : 'Product not found.';
    }
  }

  saveUpdate(): void {
    if (this.selectedSearchProduct) {
      this.productService.updateProduct(this.selectedSearchProduct);
      this.updateMessage = 'Product updated successfully!';
    }
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('auth_token');
  }

  login(): void { sessionStorage.setItem('auth_token', 'demo-token'); }
  logout(): void { sessionStorage.removeItem('auth_token'); }
}