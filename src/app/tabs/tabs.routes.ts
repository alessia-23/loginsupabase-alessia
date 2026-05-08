import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
    {
        path: '', // Ruta base de tabs
        component: TabsPage, // Página que contiene las pestañas
        children: [ // Rutas que se muestran dentro de las tabs

            {
                path: 'home', // Ruta de la pestaña Home
                loadComponent: () =>
                    import('../home/home.page').then((m) => m.HomePage) // Importa HomePage
            },

            {
                path: 'tab1', // Ruta de la pestaña CV
                loadComponent: () =>
                    import('../tab1/tab1.page').then((m) => m.Tab1Page) // Importa Tab1Page
            },

            {
                path: 'tab2', // Ruta de la pestaña Perfil
                loadComponent: () =>
                    import('../tab2/tab2.page').then((m) => m.Tab2Page) // Importa Tab2Page
            },

            {
                path: 'tab3', // Ruta de la pestaña Pokémon
                loadComponent: () =>
                    import('../tab3/tab3.page').then((m) => m.Tab3Page) // Importa Tab3Page
            },

            {
                path: '', // Cuando entra solo a /tabs
                redirectTo: 'home', // Manda automáticamente a Home
                pathMatch: 'full' // Verifica coincidencia completa
            }

        ]
    }
];