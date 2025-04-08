import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Admin } from './interface.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private admins: Admin[] = [
    {
      id: 1,
      name: 'Ahmed el',
      pack: 'Pack advanced',
      options: 'Option X',
      consommation: '100 Go',
      sms: '500 SMS',
      ocr: 'Oui',
      date: '14/05/2025',
    },
    {
      id: 2,
      name: 'Lucas',
      pack: 'Pack Basic',
      options: 'Option Y',
      consommation: '300 Go',
      sms: '200 SMS',
      ocr: 'Non',
      date: '25/01/2025'
    },
    {
      id: 3,
      name: 'Charles',
      pack: 'Pack Basic',
      options: 'Option Y',
      consommation: '20 Go',
      sms: '100 SMS',
      ocr: 'Non',
      date: '11/09/2024'
    }
  ];

  constructor() {}

  getAdmins(): Observable<Admin[]> {
    return of(this.admins);
  }
}