import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommandeService {
  private apiUrl = 'http://localhost:5000/commandes';

  constructor(private http: HttpClient) {}

  addCommande(commande: any) {  // ✅ Ajout de `any` ou `Commande`
    return this.http.post(this.apiUrl, commande);
  }
}
