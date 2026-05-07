import { Routes } from '@angular/router';

// Aquí se vanb a guardar todas las rutas de la aplicación
export const routes: Routes = [
  { // Esta es la ruta principal cuando la URL está vacía
    path: '', 
    redirectTo: 'login', // Redirecciona al login de manera automática
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then(m => m.LoginPage)
  },
  // Agregar esta ruta para que el redireccionamiento funcione
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then(m => m.HomePage)
  }
];