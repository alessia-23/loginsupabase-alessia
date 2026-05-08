import { Routes } from '@angular/router';

// Aquí se guardan todas las rutas de la aplicación
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

    loadComponent: () =>
      import('./tabs/tabs.page').then(m => m.TabsPage), // Importa la página tabs

    children: [ // Rutas hijas de tabs

      {
        path: 'tab1', // Ruta de la primera tab

        loadComponent: () =>
          import('./tab1/tab1.page').then(m => m.Tab1Page) // Importa tab1
      },

      {
        path: 'tab2', // Ruta de la segunda tab

        loadComponent: () =>
          import('./tab2/tab2.page').then(m => m.Tab2Page) // Importa tab2
      },

      {
        path: 'tab3', // Ruta de la tercera tab

        loadComponent: () =>
          import('./tab3/tab3.page').then(m => m.Tab3Page) // Importa tab3
      },

      {
        path: '', // Cuando entre a tabs
        redirectTo: 'tab1', // Redirecciona automáticamente al tab1
        pathMatch: 'full' // Verifica coincidencia completa
      }
    ]
  }
];