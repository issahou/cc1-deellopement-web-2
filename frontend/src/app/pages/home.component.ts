import { Component } from '@angular/core';
import { ClientSelectComponent } from '../components/client-select.component';
import { DatePickerComponent } from '../components/date-picker.component';
import { ProductListComponent } from '../components/product-list.component';
import { OrderSummaryComponent } from '../components/order-summary.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ClientSelectComponent, DatePickerComponent, ProductListComponent, OrderSummaryComponent], // ✅ Ajout explicite
  template: `
    <h1>Bienvenue sur le système de vente</h1>
    <app-client-select></app-client-select>
    <app-date-picker></app-date-picker>
    <app-product-list></app-product-list>
    <app-order-summary [totalHT]="totalHT"></app-order-summary>
  `,
})
export class HomeComponent {
  totalHT = 0;
}
