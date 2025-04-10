import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';

export const routes: Routes = [
//   { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recover-password', component: RecoverPasswordComponent},
  { path: 'dashboard', component: DashboardComponent },
];
