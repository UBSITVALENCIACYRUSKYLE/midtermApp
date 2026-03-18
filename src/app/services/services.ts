import { Component, signal, inject, OnInit } from '@angular/core';
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
export class Services implements OnInit {
  private productService = inject(ProductService);

  displayedProducts = signal<Product[]>([]);
  searchQuery = signal('');
  searchId = signal<number | null>(null);
  searchResult = signal<Product | null>(null);
  selectedProduct = signal<Product | null>(null);
  editingProduct = signal<Product | null>(null);
  updateMessage = signal('');

  ngOnInit(): void {
    this.displayedProducts.set(this.productService.getProducts());
  }

  // Search by name/category/brand
  onSearch(e: Event): void {
    const q = (e.target as HTMLInputElement).value;
    this.searchQuery.set(q);
    this.displayedProducts.set(
      q.trim() ? this.productService.search(q) : this.productService.getProducts()
    );
  }

  // View product details inline
  viewProduct(product: Product): void {
    this.selectedProduct.set(
      this.selectedProduct()?.id === product.id ? null : { ...product }
    );
    this.editingProduct.set(null);
  }

  // Get by ID search
  searchProduct(): void {
    const id = this.searchId();
    if (id !== null) {
      const found = this.productService.getProductById(id);
      this.searchResult.set(found ? { ...found } : null);
      this.updateMessage.set(found ? '' : 'Product not found.');
    }
  }

  // Start editing
  onEdit(product: Product): void {
    this.editingProduct.set({ ...product });
    this.selectedProduct.set(null);
    this.updateMessage.set('');
  }

  // Save edit
  saveUpdate(): void {
    const editing = this.editingProduct();
    if (editing) {
      this.productService.updateProduct(editing);
      this.displayedProducts.set(this.productService.getProducts());
      this.editingProduct.set(null);
      this.updateMessage.set('Product updated successfully!');
    }
    // also update searchResult if it was searched
    const sr = this.searchResult();
    if (sr) {
      const refreshed = this.productService.getProductById(sr.id);
      this.searchResult.set(refreshed ? { ...refreshed } : null);
    }
  }

  // Delete
  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.delete(id);
      this.displayedProducts.set(this.productService.getProducts());
      if (this.selectedProduct()?.id === id) this.selectedProduct.set(null);
      if (this.editingProduct()?.id === id) this.editingProduct.set(null);
      if (this.searchResult()?.id === id) this.searchResult.set(null);
      this.updateMessage.set('Product deleted.');
    }
  }

  isAuthenticated(): boolean { return !!sessionStorage.getItem('auth_token'); }
  login(): void { sessionStorage.setItem('auth_token', 'demo-token'); }
  logout(): void { sessionStorage.removeItem('auth_token'); }
}