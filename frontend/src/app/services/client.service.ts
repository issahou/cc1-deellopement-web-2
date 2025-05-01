import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Client {  // ✅ Ajout de `export` pour une meilleure réutilisation
  _id: string;
  nom: string;
}

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl = 'http://localhost:5000/clients'; // ✅ Correction du port

  constructor(private http: HttpClient) {} // ✅ Injection correcte

  // ✅ Récupérer tous les clients avec typage explicite
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  // ✅ Récupérer un client par son ID
  getClientById(id: string): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${id}`);
  }

  // ✅ Ajouter un nouveau client avec validation
  addClient(client: Client): Observable<Client> {
    if (!client.nom) {
      throw new Error('Le client doit avoir un nom valide.');
    }
    return this.http.post<Client>(this.apiUrl, client);
  }

  // ✅ Mettre à jour un client existant
  updateClient(id: string, client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/${id}`, client);
  }

  // ✅ Supprimer un client
  deleteClient(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
