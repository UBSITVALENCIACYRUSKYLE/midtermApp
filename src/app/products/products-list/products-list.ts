import { Component, signal, inject, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product.interface';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products-list.html',
  styleUrls: ['./products-list.css']
})
export class ProductsListComponent implements OnInit {
  private productService = inject(ProductService);

  @Output() productSelected = new EventEmitter<Product>();

  displayedProducts = signal<Product[]>([]);

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
    this.productSelected.emit(product);
  }

  onDelete(id: number): void {
    if (confirm('Delete this product?')) {
      this.productService.delete(id);
      this.displayedProducts.set(this.productService.getProducts());
    }
  }
}