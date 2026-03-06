import { Component } from '@angular/core';
@Component({ selector: 'app-attribute', standalone: true, templateUrl: './attribute.html' })
export class AttributeComponent {
  colspan = 3;
  ariaLabel = 'My accessible button';
}