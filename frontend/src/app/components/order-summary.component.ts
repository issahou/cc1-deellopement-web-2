import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  template: `
    <div>
      <p>Total HT: {{ totalHT }} €</p>
      <p>Total TTC: {{ totalTTC }} €</p>
    </div>
  `,
})
export class OrderSummaryComponent {
  @Input() totalHT: number = 0; // ✅ Ajout de @Input()

  get totalTTC() {
    return this.totalHT * 1.02; // ✅ Calcul automatique avec TVA 2%
  }
}
