import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientSelectComponent } from './components/client-select.component';
import { DatePickerComponent } from './components/date-picker.component';
import { ProductListComponent } from './components/product-list.component';
import { OrderSummaryComponent } from './components/order-summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClientSelectComponent, DatePickerComponent, ProductListComponent, OrderSummaryComponent], // ✅ Ajout des composants nécessaires
  template: `
    <header>
      <h1>Système de Ventes</h1>
      <div class="header-content">
        <app-client-select></app-client-select> <!-- ✅ Sélection du client -->
        <app-date-picker></app-date-picker> <!-- ✅ Date de commande -->
      </div>
    </header>

    <main>
      <table>
        
        <tbody>
          <app-product-list></app-product-list> <!-- ✅ Liste des produits -->
        </tbody>
      </table>
    </main>

    <footer>
      <app-order-summary></app-order-summary> <!-- ✅ Résumé de la commande -->

    </footer>
  `,
  styles: [`
    header { background: #007bff; color: white; padding: 10px; text-align: center; }
    .header-content { display: flex; justify-content: space-between; padding: 10px; }
    main { padding: 20px; }
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 10px; border: 1px solid #ddd; text-align: center; }
    footer { text-align: center; padding: 10px; background: #ddd; }
  `]
})
export class AppComponent {}
