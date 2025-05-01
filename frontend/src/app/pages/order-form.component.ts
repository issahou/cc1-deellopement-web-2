import { Component } from '@angular/core';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-order-form',
  template: `
    <button (click)="validerCommande()">Valider la commande</button>
  `,
})
export class OrderFormComponent {
  constructor(private commandeService: CommandeService) {}

  validerCommande() {
    const commande = { client_id: "ID_CLIENT", lignes_commande: [] };
    this.commandeService.addCommande(commande).subscribe((res) => {
      console.log("Commande validée:", res);
    });
  }
}
