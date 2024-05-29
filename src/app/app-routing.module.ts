import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TeamRegistrationComponent } from './team-registration/team-registration.component';
import { DetallesComponent } from './detalles/detalles.component';
import { TorneoComponent } from './torneo/torneo.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'registrarTeam',
    component: TeamRegistrationComponent
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'details/:id',
    component:DetallesComponent
  },
  {
    path: 'torneos/:category',
    component:TorneoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
