import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/atractivos',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('./servicios/servicios.module').then( m => m.ServiciosPageModule)
  },
  {
    path: 'acerca-de',
    loadChildren: () => import('./acerca-de/acerca-de.module').then( m => m.AcercaDePageModule)
  },
  {
    path: 'calificar-atractivo',
    loadChildren: () => import('./calificar-atractivo/calificar-atractivo.module').then( m => m.CalificarAtractivoPageModule)
  },
  {
    path: 'calificar-servicio',
    loadChildren: () => import('./calificar-servicio/calificar-servicio.module').then( m => m.CalificarServicioPageModule)
  },
  {
    path: 'servicio',
    loadChildren: () => import('./servicio/servicio.module').then( m => m.ServicioPageModule)
  },
  {
    path: 'atractivo',
    loadChildren: () => import('./atractivo/atractivo.module').then( m => m.AtractivoPageModule)
  },
  {
    path: 'emprendimiento',
    loadChildren: () => import('./emprendimiento/emprendimiento.module').then( m => m.EmprendimientoPageModule)
  },
  {
    path: 'emprendimientos',
    loadChildren: () => import('./emprendimientos/emprendimientos.module').then( m => m.EmprendimientosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'menu-atractivos',
    loadChildren: () => import('./menu-atractivos/menu-atractivos.module').then( m => m.MenuAtractivosPageModule)
  },
  {
    path: 'menu-servicios',
    loadChildren: () => import('./menu-servicios/menu-servicios.module').then( m => m.MenuServiciosPageModule)
  },
  {
    path: 'buscador',
    loadChildren: () => import('./buscador/buscador.module').then( m => m.BuscadorPageModule)
  },
  {
    path: 'rutas',
    loadChildren: () => import('./rutas/rutas.module').then( m => m.RutasPageModule)
  },
  {
    path: 'ruta',
    loadChildren: () => import('./ruta/ruta.module').then( m => m.RutaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
