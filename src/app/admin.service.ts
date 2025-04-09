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
      name: 'DEC',
      pack: 'Pack advanced',
      options: 'Option X',
      consommation: '100 Go',
      sms: '500 SMS',
      ocr: 'Oui',
      date: '14/05/2025',
    },
    {
      id: 2,
      name: 'AEDS',
      pack: 'Pack Basic',
      options: 'Option Y',
      consommation: '300 Go',
      sms: '200 SMS',
      ocr: 'Oui',
      date: '25/01/2025'
    },
    {
      id: 3,
      name: 'POE',
      pack: 'Pack Basic',
      options: 'Option Y',
      consommation: '20 Go',
      sms: '100 SMS',
      ocr: 'Non',
      date: '11/09/2024'
    },
    {
      id: 4,
      name: 'PPE',
      pack: 'Pack Premium',
      options: 'Option Z',
      consommation: '50 Go',
      sms: '100 SMS',
      ocr: 'Oui',
      date: '23/05/2024'
    },
    {
      id: 5,
      name: 'ABC',
      pack: 'Pack Plus',
      options: 'Option Y',
      consommation: '30 Go',
      sms: '200 SMS',
      ocr: 'Non',
      date: '12/06/2024'
    },
    {
      id: 6,
      name: 'PE TECH',
      pack: 'Pack Basic',
      options: 'Option X',
      consommation: '10 Go',
      sms: '50 SMS',
      ocr: 'Oui',
      date: '05/07/2024'
    },
    {
      id: 7,
      name: 'XYZ',
      pack: 'Pack Premium',
      options: 'Option Y',
      consommation: '20 Go',
      sms: '100 SMS',
      ocr: 'Non',
      date: '18/08/2024'
    },
    {
      id: 8,
      name: 'DEF',
      pack: 'Pack Plus',
      options: 'Option Z',
      consommation: '30 Go',
      sms: '200 SMS',
      ocr: 'Oui',
      date: '09/09/2024'
    }
  ];

  constructor() { }

  getAdmins(): Observable<Admin[]> {
    return of(this.admins);
  }
}