import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Admin } from './interface.model';

@Injectable({
  providedIn: 'root'
})
export class adminService {
  private admins: Admin[] = [];
  private adminsSubject = new BehaviorSubject<Admin[]>([]);

  admins$ = this.adminsSubject.asObservable();

  constructor() {
    // Add dummy data
    this.admins = [
      { id: 1, name: 'User A', pack: 'Basic', options: 'Extra data', consommation: '5GB', sms: '80', ocr: 'Enabled' }
    ];
    this.adminsSubject.next(this.admins);
  }

  getAdmins() {
    return this.admins$;
  }

  addAdmin(admin: Admin) {
    admin.id = Date.now();
    this.admins.push(admin);
    this.adminsSubject.next(this.admins);
  }

  updateAdmin(admin: Admin) {
    const index = this.admins.findIndex(p => p.id === admin.id);
    if (index !== -1) {
      this.admins[index] = admin;
      this.adminsSubject.next(this.admins);
    }
  }

  deleteAdmin(id: number) {
    this.admins = this.admins.filter(p => p.id !== id);
    this.adminsSubject.next(this.admins);
  }
}
