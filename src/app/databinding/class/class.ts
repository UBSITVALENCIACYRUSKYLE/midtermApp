import { Component } from '@angular/core';
@Component({ selector: 'app-class', standalone: true, templateUrl: './class.html' })
export class ClassComponent {
  isActive = false;
  toggle() { this.isActive = !this.isActive; }
}