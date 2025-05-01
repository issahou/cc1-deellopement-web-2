import { Component, OnInit, NgZone } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ Ajout de CommonModule

interface Produit {
  _id: string;
  libelle: string;
  prix: number;
  quantite: number;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, CommonModule], // ✅ Ajout de CommonModule
  template: `
    <table>
      <tr>
        <th>Produit</th>
        <th>Prix</th>
        <th>Quantité</th>
        <th>Total</th>
        <th>Actions</th>
      </tr>
      <tr *ngFor="let produit of produits; let i = index">
        <td>{{ produit.libelle }}</td>
        <td>{{ produit.prix | currency:'EUR' }}</td>
        <td>{{ produit.quantite }}</td> <!-- ✅ Affichage dynamique -->
        <td>{{ produit.quantite * produit.prix | currency:'EUR' }}</td>
        <td>
          <button (click)="modifierQuantite(i, 1)">➕</button>
          <button (click)="modifierQuantite(i, -1)" [disabled]="produit.quantite <= 0">➖</button>
        </td>
      </tr>
    </table>
  `,
})
export class ProductListComponent implements OnInit {
  produits: Produit[] = [];

  constructor(private produitService: ProduitService, private ngZone: NgZone) {}

  ngOnInit() {
    this.produitService.getProduits().subscribe((data: Produit[]) => {
      this.produits = data.map((p) => ({ ...p, quantite: 0 })); // ✅ Initialisation à 0
    });
  }

  // ✅ Met à jour la quantité et force Angular à détecter le changement
  modifierQuantite(index: number, valeur: number) {
    this.ngZone.run(() => { // ✅ Force Angular à détecter le changement
      const produit = { ...this.produits[index] };
      produit.quantite = Math.max(0, produit.quantite + valeur);
      this.produits[index] = produit;

      // ✅ Envoi de la mise à jour au backend
      this.produitService.updateProduit(produit._id, { quantite: produit.quantite })
        .subscribe(() => console.log(`Quantité mise à jour: ${produit.quantite}`));
    });
  }
}
