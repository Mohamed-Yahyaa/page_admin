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
  displayedAdmin: Admin | undefined;

  constructor(private adminService: AdminService, private route: ActivatedRoute) {}

 

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = +params['id'];
      this.adminService.getAdmins().subscribe(data => {
        this.admins = data;
        this.displayedAdmin = this.admins.find(admin => admin.id === id);
      });
    });
  }
}
