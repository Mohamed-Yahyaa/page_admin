import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css',
 
  
})
export class AppComponent {}
