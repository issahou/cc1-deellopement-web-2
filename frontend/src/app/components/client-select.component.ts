import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

interface Client {
  _id: string;
  nom: string;
}

@Component({
  selector: 'app-client-select',
  standalone: true, // ✅ Ajout pour Angular 17+
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatOptionModule], // ✅ Ajout explicite
  template: `
    <mat-form-field>
      <mat-label>Choisir un client</mat-label>
      <mat-select [(ngModel)]="selectedClient">
        <mat-option *ngFor="let client of clients" [value]="client._id">
          {{ client.nom }}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `,
})
export class ClientSelectComponent implements OnInit {
  clients: Client[] = []; // ✅ Typage explicite
  selectedClient: string = ''; // ✅ Initialisation pour éviter l'erreur TS2564

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.getClients().subscribe((data: Client[]) => {
      this.clients = data;
    });
  }
}
