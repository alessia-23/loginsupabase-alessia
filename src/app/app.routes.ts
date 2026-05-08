import { Routes } from '@angular/router';

// Aquí se guardan las rutas principales de la aplicación
export const routes: Routes = [

  {
    path: '', // Cuando la URL está vacía
    redirectTo: 'login', // Redirecciona automáticamente al login
    pathMatch: 'full' // Verifica que la URL esté completamente vacía
  },

  {
    path: 'login', // Ruta de la página login
    loadComponent: () =>
      import('./pages/login/login.page').then(m => m.LoginPage) // Importa el componente login
  },

  {
    path: 'tabs', // Ruta principal después del login
    loadChildren: () =>
      import('./tabs/tabs.routes').then(m => m.routes) // Importa las rutas internas de las tabs
  }

];