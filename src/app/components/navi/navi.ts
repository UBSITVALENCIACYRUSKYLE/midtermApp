import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navi.html',
  styleUrl: './navi.css'
})
export class NaviComponent {}
