import { Routes } from '@angular/router';

// Aquí se vanb a guardar todas las rutas de la aplicación
export const routes: Routes = [
  { 
    // Cuando la URL está vacía manda automáticamente al login
    path: '', 
    redirectTo: 'login', // Redirecciona al login de manera automática
    pathMatch: 'full'
  },
  {
    // Ruta de la página login
    path: 'login', // Crea la ruta login
    // Importa el componente login
    loadComponent: () =>
      import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    // Ruta de la página principal
    path: 'home',
    // Importa el componente home
    loadComponent: () =>
      import('./home/home.page').then(m => m.HomePage) // Carga el archivo login 
  }
];