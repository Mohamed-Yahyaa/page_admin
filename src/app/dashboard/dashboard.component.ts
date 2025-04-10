import { Component, OnInit } from '@angular/core';
import { Admin } from '../interface.model';
import { AdminService } from '../admin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule, FormsModule],
})
export class DashboardComponent implements OnInit {
  admins: Admin[] = [];
  filteredAdmins: Admin[] = [];
  searchTerm: string = '';
  searchVisible: boolean = true;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAdmins().subscribe(data => {
      this.admins = data;

    });
  }

  // toggleSearch() {
  //   this.searchVisible = !this.searchVisible;
  //   if (!this.searchVisible) {
  //     this.searchTerm = '';
  //     this.filteredAdmins = [];
  //   }
  // }

  onSearchChange() {
    const term = this.searchTerm.trim().toLowerCase();
    if (term.length > 0) {
      this.filteredAdmins = this.admins.filter(admin =>
        admin.name.toLowerCase().includes(term)
      );
    } else {
      this.filteredAdmins = [];
    }
  }
}
