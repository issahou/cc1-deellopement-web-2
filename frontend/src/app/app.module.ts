import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http'; // ✅ Ajout de `withFetch()`

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home.component';
import { OrderFormComponent } from './pages/order-form.component';
import { ClientSelectComponent } from './components/client-select.component';
import { DatePickerComponent } from './components/date-picker.component';
import { ProductListComponent } from './components/product-list.component';
import { OrderSummaryComponent } from './components/order-summary.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { ClientService } from './services/client.service';
import { CommandeService } from './services/commande.service';
import { ProduitService } from './services/produit.service';

// ✅ Correction de l'importation des routes
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'order', component: OrderFormComponent },
  { path: 'clients', component: ClientSelectComponent },
  { path: 'products', component: ProductListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderFormComponent,
    ClientSelectComponent,
    DatePickerComponent,
    ProductListComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true }), // ✅ Ajout de `useHash: true`
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    provideHttpClient(withFetch()), // ✅ Activation de `fetch` APIs
    ClientService,
    CommandeService,
    ProduitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
