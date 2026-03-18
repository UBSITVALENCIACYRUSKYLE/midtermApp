import { Routes } from '@angular/router';
import { Home }                    from './components/home/home';
import { SuppliersComponent }      from './components/suppliers/suppliers';
import { Services }                from './services/services';
import { ProductsComponent }       from './products/products';
import { ProductsListComponent }   from './products/products-list/products-list';
import { ProductDetailsComponent } from './products/product-details/product-details';

export const routes: Routes = [
  { path: '',           redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',       component: Home },
  { path: 'suppliers',  component: SuppliersComponent },
  { path: 'product',    component: ProductsComponent },
  { path: 'product-list',    component: ProductsListComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: '**',         redirectTo: 'home' }
];
