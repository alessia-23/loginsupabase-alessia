import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButton } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonButton]
})
export class Tab2Page implements OnInit {

  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) {
    addIcons({
      logOutOutline
    });
  }
  ngOnInit() {
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
