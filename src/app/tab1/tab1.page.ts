import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {IonButton,IonCard,IonCardContent,IonCardHeader,IonCardSubtitle,IonCardTitle,IonItem,IonList,IonThumbnail,IonIcon} from '@ionic/angular/standalone';
import { IonLabel, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import {IonItemDivider,IonItemGroup,IonItemOption,IonItemOptions,IonItemSliding} from '@ionic/angular/standalone';
import { IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardContent, 
    IonCardHeader, IonCardSubtitle, IonCardTitle, IonLabel, IonItem, IonList, IonThumbnail, IonItemDivider, IonItemGroup, 
    IonItemOption, IonItemOptions, IonItemSliding, IonCol, IonGrid, IonRow, IonIcon]
})
export class Tab1Page implements OnInit {

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
    abrirRepo() {
    window.open('https://github.com/alessia-23', '_blank');
  }
}