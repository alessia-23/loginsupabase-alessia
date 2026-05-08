import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonFab,
  IonFabButton,
  IonIcon
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { camera } from 'ionicons/icons';

import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,

  imports: [
    CommonModule,
    NgFor,

    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,

    IonGrid,
    IonRow,
    IonCol,
    IonImg,

    IonFab,
    IonFabButton,
    IonIcon
  ]
})
export class Tab2Page {

  constructor(public photoService: PhotoService) {
    addIcons({ camera });
  }

  ngOnInit() {
    this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}