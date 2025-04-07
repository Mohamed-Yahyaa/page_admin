import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet,RouterLink],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css',
 
  
})
export class AppComponent {}
