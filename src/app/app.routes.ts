import { Routes } from '@angular/router';
import { Services } from './services/services';
import { ProductsComponent } from './products/products';
import { ProductsListComponent } from './products/products-list/products-list';


export const routes: Routes = [
  { path: '', component: Services },
  { path: 'product', component: ProductsComponent },
  { path: 'product-list', component: ProductsListComponent },
  { path: '**', redirectTo: '' }
];