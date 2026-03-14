import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product.interface';
import { Employee } from '../../models/employee';
import { Employee as EmployeeService } from '../../services/employee';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products-list.html',
  styleUrls: ['./products-list.css']
})
export class ProductsListComponent implements OnInit {

  @Output() productSelected = new EventEmitter<Product>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {}

  get products(): Product[] {
    return this.productService.getProducts();
  }

  viewProductDetails(product: Product): void {
    this.productSelected.emit(product);
  }
}