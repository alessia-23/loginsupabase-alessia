import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';// Importación de componentes de Ionic que se usan en el HTML
import { Router } from '@angular/router';// Permite navegar entre páginas
import { SupabaseService } from '../services/supabase.service';// Importa el servicio de Supabase

import { addIcons } from 'ionicons'; // para agregar el icono
import { logOutOutline } from 'ionicons/icons';// Para agregar el ícono 

@Component({
  selector: 'app-home', // Nombre del componente
  templateUrl: 'home.page.html', // HTML de la página
  styleUrls: ['home.page.scss'], // Estilos de la página
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon],// Componentes de Ionic que se usarán
})
export class HomePage {
  // Constructor donde se inyectan los servicios
  constructor(
    private supabaseService: SupabaseService,// Permite usar funciones de Supabase
    private router: Router // Permite cambiar de página
  ) {
    addIcons({
      logOutOutline
    });
  }
  async cerrarSesion() {// Función para cerrar sesión
    const { error } = await this.supabaseService.logout();// Llama al método logout del servicio
    // Verifica si hubo error
    if (error) {
      console.log('Error al cerrar sesión: ', error.message);// Muestra el error en consola
      return;// Detiene la función
    }
    this.router.navigate(['/login']);// Si todo sale bien vuelve al login
  }
}