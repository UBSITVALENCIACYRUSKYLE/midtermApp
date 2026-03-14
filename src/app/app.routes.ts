import { Routes } from '@angular/router';
import { Services } from './services/services';

export const routes: Routes = [
  { path: '', component: Services },
  { path: '**', redirectTo: '' }
];