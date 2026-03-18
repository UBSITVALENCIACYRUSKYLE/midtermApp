import { Component, signal, inject, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product.interface';
import { ProductService } from '../../services/product';
import { ProductDetailsComponent } from '../product-details/product-details';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductDetailsComponent],
  templateUrl: './products-list.html',
  styleUrls: ['./products-list.css']
})
export class ProductsListComponent implements OnInit {
  private productService = inject(ProductService);

  @Output() productSelected = new EventEmitter<Product>();

  displayedProducts      = signal<Product[]>([]);
  selectedDetailProduct  = signal<Product | null>(null);
  showDetailModal        = signal(false);

  ngOnInit(): void {
    this.displayedProducts.set(this.productService.getProducts());
  }

  onSearch(e: Event): void {
    const q = (e.target as HTMLInputElement).value;
    this.displayedProducts.set(
      q.trim() ? this.productService.search(q) : this.productService.getProducts()
    );
  }

  viewProductDetails(product: Product): void {
    this.selectedDetailProduct.set({ ...product });
    this.showDetailModal.set(true);
    this.productSelected.emit(product);
  }

  onDetailClosed(): void {
    this.showDetailModal.set(false);
    this.selectedDetailProduct.set(null);
  }

  onDelete(id: number): void {
    if (confirm('Delete this product?')) {
      this.productService.delete(id);
      this.displayedProducts.set(this.productService.getProducts());
    }
  }
}
