import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
  IonCard,
  IonCardContent
} from '@ionic/angular/standalone';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonText,
    IonCard,
    IonCardContent,
  ]
})
export class LoginPage {
  email = '';
  password = '';
  mensaje = '';

  // Variable para mostrar u ocultar contraseña
  mostrarPassword = false;

  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) { }

  async login() {
    // Verifica campos vacíos
    if (!this.email.trim() || !this.password.trim()) {
      this.mensaje = 'Todos los campos son obligatorios';
      return;
    }
    // Realiza login en Supabase
    const { error } = await this.supabaseService.login(
      this.email,
      this.password
    );
    // Verifica errores
    if (error) {
      this.mensaje = error.message;
      return;
    }
    // Redirecciona al home
    this.router.navigateByUrl('/home');
  }


  async register() {
    // Verifica campos vacíos
    if (!this.email.trim() || !this.password.trim()) {
      this.mensaje = 'Todos los campos son obligatorios';
      return;
    }
    // Expresión regular para contraseña segura
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,12}$/;
    // Verifica formato de contraseña
    if (!passwordRegex.test(this.password)) {
      this.mensaje =
        'La contraseña debe tener entre 6 y 12 caracteres, mayúsculas, minúsculas, números y caracteres especiales';
      return;
    }
    // Registro en Supabase
    const { data, error } = await this.supabaseService.register(
      this.email,
      this.password
    );
    // Verifica errores de Supabase
    if (error) {
      this.mensaje = error.message;
      return;
    }
    // Verifica si el correo ya existe
    if (data.user && data.user.identities?.length === 0) {
      this.mensaje = 'Ya existe una cuenta con este correo';
      return;
    }
    // Mensaje exitoso
    this.mensaje = 'Usuario registrado';
  }
}
