import { Component, OnInit } from '@angular/core';
import { Admin } from '../interface.model';
import { AdminService } from '../admin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class DashboardComponent implements OnInit {
  admins: Admin[] = [];
  filteredAdmins: Admin[] = [];
  searchTerm: string = '';
  searchVisible: boolean = true;
  isLoading: boolean = false;
  error: string | null = null;
  currentSociete = '';

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadAdmins();
  }

  loadAdmins(): void {
    this.isLoading = true;
    this.error = null;

    this.adminService.getAdmins(this.currentSociete)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        next: (data) => {
          this.admins = data;
          this.filteredAdmins = [];
        },
        error: (err) => {
          this.error = err.message;
          this.admins = [];
          this.filteredAdmins = [];
        }
      });
  }

  onSearchClick(): void {
    this.isLoading = true;
    this.error = null;

    this.adminService.getAdmins(this.currentSociete)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        next: (data) => {
          this.admins = data;
          const term = this.searchTerm.trim().toLowerCase();
          this.filteredAdmins = term
            ? this.admins.filter(admin => admin.name.toLowerCase().includes(term))
            : [];
        },
        error: (err) => {
          this.error = err.message;
          this.admins = [];
          this.filteredAdmins = [];
        }
      });
  }

  onSearchInputChange(): void {
    if (!this.searchTerm.trim()) {
      this.filteredAdmins = [];
    }
  }

  refreshData(): void {
    this.loadAdmins();
  }
}
