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
      utilisateur:'Mike',
      pack: 'Pack advanced',
      options: 'Option X',
      consommation: '100 Go',
      signature: 'B',
      sms: '500 SMS',
      ocr: 'Oui',
      datecre: '14/05/2025',
      daterev: '08/02/2026',
    },
    {
      id: 2,
      name: 'AEDS',
      utilisateur:'Mike',
      pack: 'Pack Basic',
      options: 'Option Y',
      consommation: '300 Go',
      signature: 'B',
      sms: '200 SMS',
      ocr: 'Oui',
      datecre: '14/05/2025',
      daterev: '08/02/2026',
    },
    {
      id: 3,
      name: 'POE',
      utilisateur:'Mike',
      pack: 'Pack Basic',
      options: 'Option Y',
      consommation: '20 Go',
      signature: 'B',
      sms: '100 SMS',
      ocr: 'Non',
      datecre: '14/05/2025',
      daterev: '08/02/2026',
    },
    {
      id: 4,
      name: 'PPE',
      utilisateur:'Mike',
      pack: 'Pack Premium',
      options: 'Option Z',
      consommation: '50 Go',
      signature: 'B',
      sms: '100 SMS',
      ocr: 'Oui',
      datecre: '14/05/2025',
      daterev: '08/02/2026',
    },
    {
      id: 5,
      name: 'ABC',
      utilisateur:'Mike',
      pack: 'Pack Plus',
      options: 'Option Y',
      consommation: '30 Go',
      signature: 'B',
      sms: '200 SMS',
      ocr: 'Non',
      datecre: '14/05/2025',
      daterev: '08/02/2026',
    },
    {
      id: 6,
      name: 'PE TECH',
      utilisateur:'Mike',
      pack: 'Pack Basic',
      options: 'Option X',
      consommation: '10 Go',
      signature: 'B',
      sms: '50 SMS',
      ocr: 'Oui',
      datecre: '14/05/2025',
      daterev: '08/02/2026',
    },
    {
      id: 7,
      name: 'XYZ',
      utilisateur:'Mike',
      pack: 'Pack Premium',
      options: 'Option Y',
      consommation: '20 Go',
      signature: 'B',
      sms: '100 SMS',
      ocr: 'Non',
      datecre: '14/05/2025',
      daterev: '08/02/2026',
    },
    {
      id: 8,
      name: 'DEF',
      utilisateur:'Mike',
      pack: 'Pack Plus',
      options: 'Option Z',
      consommation: '30 Go',
      signature: 'B',
      sms: '200 SMS',
      ocr: 'Oui',
      datecre: '14/05/2025',
      daterev: '08/02/2026',
    },
    {
      id: 9,
      name: 'Foliatech',
      utilisateur:'Brahim',
      pack: 'Pack Premium',
      options: 'Option A',
      consommation: '100 Go',
      signature: 'A',
      sms: '500 SMS',
      ocr: 'Oui',
      datecre: '19/01/2023',
      daterev: '08/02/2026',
    }
  ];

  constructor() { }

  getAdmins(): Observable<Admin[]> {
    return of(this.admins);
  }
}