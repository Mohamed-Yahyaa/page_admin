import { Component, OnInit } from '@angular/core';
import { Admin } from '../interface.model';
import { AdminService } from '../admin.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule],
})
export class DashboardComponent implements OnInit {
  admins: Admin[] = [];
  // displayedAdmin: Admin | undefined;

  constructor(private adminService: AdminService) {}

  searchVisible: boolean = true;

  toggleSearch() {
    this.searchVisible = !this.searchVisible;
  }
  

  ngOnInit(): void {
    
      
      this.adminService.getAdmins().subscribe(data => {
        this.admins = data;
        
      
    });
  }
}

