import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: ()=> import('./login/login.component').then(m=> m.LoginComponent)},
  { path: 'recover-password', loadComponent: ()=> import('./recover-password/recover-password.component').then(m=> m.RecoverPasswordComponent)  },
  { path: 'dashboard', loadComponent: ()=> import('./dashboard/dashboard.component').then(m=> m.DashboardComponent)}
];
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    
    provideClientHydration(withEventReplay())]
};
