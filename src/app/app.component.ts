import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component'; // ✅ Make sure the path is correct

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [LoginComponent], 
  template: '<app-login></app-login>', 
})
export class AppComponent {}
