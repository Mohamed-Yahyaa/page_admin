import { Component, OnInit } from '@angular/core';
import { Admin } from '../interface.model';
import { adminService } from '../admin.service';


@Component({
  selector: 'app-admin',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  admins: Admin[] = [];
  currentadmin: Admin = this.getEmptyAdmin();
  isEditing: boolean = false;

  constructor(private adminService: adminService) {}

  ngOnInit(): void {
    this.adminService.getAdmins().subscribe(data => {
      this.admins = data;
    });
  }

  getEmptyAdmin(): Admin {
    return {
      id: 0,
      name: '',
      pack: '',
      options: '',
      consommation: '',
      sms: '',
      ocr: ''
    };
  }

  saveAdmin() {
    if (this.isEditing) {
      this.adminService.updateAdmin(this.currentadmin);
    } else {
      this.adminService.addAdmin(this.currentadmin);
    }
    this.currentadmin = this.getEmptyAdmin();
    this.isEditing = false;
  }

  editAdmin(admins: Admin) {
    this.currentadmin = { ...admins };
    this.isEditing = true;
  }

  deleteAdmin(id: number) {
    this.adminService.deleteAdmin(id);
  }
}
