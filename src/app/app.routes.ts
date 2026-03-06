import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { InterpolationComponent } from './databinding/interpolation/interpolation';
import { PropertyComponent } from './databinding/property/property';
import { EventComponent } from './databinding/event/event';
import { TwoWayBinding } from './databinding/two-way/two-way';
import { AttributeComponent } from './databinding/attribute/attribute';
import { ClassComponent } from './databinding/class/class';
import { StyleComponent } from './databinding/style/style';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'property', component: PropertyComponent },
  { path: 'event', component: EventComponent },
  { path: 'two-way', component: TwoWayBinding },
  { path: 'attribute', component: AttributeComponent },
  { path: 'class', component: ClassComponent },
  { path: 'style', component: StyleComponent },
];