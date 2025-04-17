import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const token = localStorage.getItem('auth_token');

   
    if (username === 'user01' && password === 'demodemo') {
      return true;
    // } else {
    //   alert('Invalid credentials. Please try again.');
    }
    if (token) {
     
      return true;
    }

    
    this.router.navigate(['/login']);
    return false;
  }
}