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

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
   
  //  this.loadAdmins();
  }
  // loadAdmins() {
  //   const societe = 'yourSocieteName'; // You can replace this with the actual value
  //   this.adminService.getAdmins(societe).subscribe({
  //     next: (admins) => {
  //       this.admins = admins; // Store the result in the variable
  //     },
  //     error: (err) => {
  //       this.error = 'Error fetching admins: ' + err.message;
  //     }
  //   });
  // }

  
  onSearchClick(): void {
    const societe = this.searchTerm.trim();

    if (!societe) {
      this.error = 'Please enter a societe name.';
      return;
    }

    this.isLoading = true;
    this.error = null;

    this.adminService.getAdmins(societe)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        next: (data) => {
          this.admins = data;
          this.filteredAdmins = data;
        },
        error: (err) => {
          this.error = 'Error fetching admins: ' + err.message;
          this.admins = [];
          this.filteredAdmins = [];
        }
      });
  }

  // Optional: Clear filtered results when the input is cleared
  onSearchInputChange(): void {
    if (!this.searchTerm.trim()) {
      this.filteredAdmins = [];
      this.admins = [];
    }
  }
  

  // Optional: Button to reload the latest data for the last searched societe
  refreshData(): void {
    if (this.searchTerm.trim()) {
      this.onSearchClick();
    }
  }
}
