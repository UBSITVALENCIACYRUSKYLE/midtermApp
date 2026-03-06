import { Component } from '@angular/core';
@Component({ selector: 'app-style', standalone: true, templateUrl: './style.html' })
export class StyleComponent {
  fontSize = 16;
  textColor = '#0d6efd';
  increase() { this.fontSize += 2; }
  decrease() { this.fontSize -= 2; }
}