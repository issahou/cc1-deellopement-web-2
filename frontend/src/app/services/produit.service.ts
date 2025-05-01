import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export interface Produit {
  _id: string;
  libelle: string;
  prix: number;
  quantite: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  private apiUrl = 'http://localhost:5000/produits';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  // ✅ Récupérer tous les produits avec gestion des erreurs
  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiUrl, this.httpOptions).pipe(
      catchError(this.handleError('Impossible de récupérer les produits'))
    );
  }

  // ✅ Récupérer un produit par son ID avec gestion des erreurs
  getProduitById(id: string): Observable<Produit> {
    return this.http.get<Produit>(`${this.apiUrl}/${id}`, this.httpOptions).pipe(
      catchError(this.handleError(`Impossible de récupérer le produit ${id}`))
    );
  }

  // ✅ Ajouter un nouveau produit avec validation et gestion des erreurs
  addProduit(produit: Produit): Observable<Produit> {
    if (!produit.libelle || produit.prix <= 0) {
      return throwError(() => new Error('Le produit doit avoir un libellé et un prix valide.'));
    }
    return this.http.post<Produit>(this.apiUrl, produit, this.httpOptions).pipe(
      catchError(this.handleError('Impossible d’ajouter le produit'))
    );
  }

  // ✅ Mettre à jour un produit existant avec gestion des erreurs
  updateProduit(id: string, data: Partial<Produit>): Observable<Produit> {
    return this.http.put<Produit>(`${this.apiUrl}/${id}`, data, this.httpOptions).pipe(
      catchError(this.handleError(`Impossible de mettre à jour le produit ${id}`))
    );
  }

  // ✅ Supprimer un produit avec gestion des erreurs
  deleteProduit(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.httpOptions).pipe(
      catchError(this.handleError(`Impossible de supprimer le produit ${id}`))
    );
  }

  // ✅ Fonction générique pour gérer les erreurs
  private handleError(message: string) {
    return (error: any) => {
      console.error(`${message}:`, error);
      return throwError(() => new Error(message));
    };
  }
}
