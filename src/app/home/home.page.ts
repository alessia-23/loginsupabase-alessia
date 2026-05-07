import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { SupabaseService } from '../services/supabase.service';// Se coloca la ruta que

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  constructor(
    private supabaseService:SupabaseService,
    private router: Router
  ) {}
  async cerrarSesion(){
    const {error}= await this.supabaseService.logout();

    if (error){
      console.log('Error al cerrar sesión: ', error.message);
      return;
    }
    this.router.navigate(['/login']);
  }
}
