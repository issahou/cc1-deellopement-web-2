import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { OrderFormComponent } from './pages/order-form.component';
import { ClientSelectComponent } from './components/client-select.component';
import { ProductListComponent } from './components/product-list.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'order', component: OrderFormComponent },
  { path: 'clients', component: ClientSelectComponent },
  { path: 'products', component: ProductListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
