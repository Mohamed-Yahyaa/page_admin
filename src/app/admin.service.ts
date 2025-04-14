import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Admin } from './interface.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private admins: Admin[] = [
    {
      name: 'DEC',
      pack: 'Pack advanced',
      dateSubscription: new Date("2023-05-07"),
      dateExpiration: new Date ,
      userSupp:'180',
      options: ['Maintenance',
        'Gestion stock',
        'Automatisation',],
      smsConsomation: '5',
      signatureConsomation: '0',
      ocrConsomation: '1',
      tarifeoLicence: '2',
    },
    {
      name: 'Foliatech',
      pack: 'null',
      dateSubscription: new Date("2021-07-15"),
      dateExpiration: new Date ,
      userSupp:'120',
      options: ['Maintenance',
        'Gestion stock',
        'Automatisation',
        'CRM',
        'Rapprot dynamique',
        'Primes énergie',
        'Module RH',
        'Tarifeo'],
      smsConsomation: '10',
      signatureConsomation: '0',
      ocrConsomation: '0',
      tarifeoLicence: '2',
    },


  ];

  constructor() { }

  getAdmins(): Observable<Admin[]> {
    return of(this.admins);
  }
}