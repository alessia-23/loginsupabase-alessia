import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonSpinner,
  IonChip,
  IonList,
  IonLabel, 
  IonButtons
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';

import { SupabaseService } from '../services/supabase.service';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonItem,
    IonInput,
    IonSpinner,
    IonChip,
    IonList,
    IonLabel ,
    IonButtons
  ]
})
export class Tab3Page implements OnInit {

  pokemonName = '';
  pokemon: any = null;
  loading = false;

  constructor(
    private supabaseService: SupabaseService,
    private pokemonService: PokemonService,
    private router: Router
  ) {
    addIcons({
      logOutOutline
    });
  }

  ngOnInit() {}

  searchPokemon() {
    if (!this.pokemonName.trim()) {
      return;
    }

    this.loading = true;
    this.pokemon = null;

    this.pokemonService.getPokemonDetails(this.pokemonName.trim()).subscribe({
      next: (data: any) => {
        this.pokemon = data;
        this.loading = false;
      },
      error: () => {
        alert('Pokémon no encontrado');
        this.loading = false;
      }
    });
  }

  async cerrarSesion() {
    const { error } = await this.supabaseService.logout();

    if (error) {
      console.log('Error al cerrar sesión: ', error.message);
      return;
    }

    this.router.navigate(['/login']);
  }
}