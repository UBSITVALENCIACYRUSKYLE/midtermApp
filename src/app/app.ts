import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from './components/navi/navi';
import { Product } from './products/products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NaviComponent, Product],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'midtermApp';
}