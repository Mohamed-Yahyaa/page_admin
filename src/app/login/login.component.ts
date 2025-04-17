import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, MatCardModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword = true;
  

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  navigateToRecoverPassword(): void {
    this.router.navigate(['/recover-password']);
  }
  navigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Hardcoded check
      if (username === 'user01' && password === 'demodemo') {
        // Store a fake token
        localStorage.setItem('auth_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJ1c2VyQGVtYWlsLmNvbSIsInVzZXJOYW1lIjoidXNlcjAxIiwidXNlcklkIjoiYjAxOWQwYmItY2Q5Ny00YTFlLTk3NzAtNDExYTJhMTMzMDAyIiwiZnVsbE5hbWUiOiJ1c2VyMDEgUHJlbm9tVVNFUiIsInNvY2lldGVJZCI6IkZvbGlhdGVjaCIsImlzUGVyc29ubmVsQ2hhbnRpZXIiOiJGYWxzZSIsInBlcm1pc3Npb25Tb2NpZXRlIjoiWzQyLDEsMiwzLDQsNSw2LDcsOCw5LDEwLDExLDEyLDEzLDE1LDE2LDE3LDE4LDE5LDIwLDIyLDIzLDI0LDI1LDI2LDI3LDI4LDI5LDMxLDMzLDMyLDM4LDM5LDQzLDQ0LDM0LDM1LDQwLDQxLDM2LDQ1LDQ2LDYwLDYxLDYyLDQ3LDMwMCw0OCw2NCw2Myw1MCw1NTZdIiwibWVzc2FnZXJpZUdsb2JhbCI6IntcImFjY2Vzc1Rva2VuXCI6bnVsbCxcInRva2VuRXhwaXJhdGlvbkRhdGVcIjpudWxsLFwiZW1haWxcIjpcImNvbnRhY3RAYXhpb2JhdC5jb21cIn0iLCJtZXNzYWdlcmllVXNlciI6IntcImFjY2Vzc1Rva2VuXCI6bnVsbCxcInRva2VuRXhwaXJhdGlvbkRhdGVcIjpudWxsLFwiZW1haWxcIjpcImJyYWhpbS5kZXJyb3VpY2hAZm9saWF0ZWNoLm1hXCJ9IiwiZGlzcGFseVByaW1lIjoiVHJ1ZSIsImFib25uZW1lbnQiOiIiLCJyb2xlTmFtZSI6IkRpcmVjdGlvbiIsInJvbGVJZCI6ImJiOTgwZjc5LWRmNmItNDY4Yy1iMDVhLTg0MjJiMWZjNDBlMCIsInJvbGVUeXBlIjoiMSIsInBlcm1pc3Npb25zIjoiWzMwMSwzMDQsNTgxLDU2MSw1NjIsNTYzLDU2NCw1NjUsNiwxLDIsMyw0LDUsMjUwNiwzMDAwLDIxLDIyLDIzLDI0LDI1MDksMzAwMSwxMDAwLDEwMDEsMTAwMiwxMDAzLDEwMDQsMTAwNSwxMDA2LDEwMDcsMTAyMCwxMDIxLDIwMDgsMjAwOSwyMDEwLDIwMTEsMjAxMiwzMDE5LDIwMDAsMjAwMSwyMDAyLDIwMDMsMzAxOCwyMDEzLDIwMDQsMjAwNSwyMDA2LDIwMDcsMjAxNCwyMDE2LDMwMjAsMjAxNSwyNDAsMjQxLDI0MiwyNDMsMjQ0LDI4MiwyNjEsMjYyLDI2MywyNjQsMjQwMCwyNDAxLDI0MDIsMjQwMyw2NjAsNjYxLDMwMDIsNjYzLDMwMzAsMzAzMSwzMDQwLDMwNDEsMzA0MiwzMDQzLDMwNDQsNDQwLDQ0MSw0NDIsNDQzLDQ0NCw0MDYwLDQwNjQsNDQ1LDQ1MSw0NTIsNDUzLDQ1NiwzMDAzLDY5NCw2OTUsNjk2LDY5NywzMDE3LDYwOTQsNjA5NSw2MDk2LDYwOTcsNjA5OCw2MDk5LDYwOTMsNDA5MSw0MDkyLDQwOTMsNDA5NCwyNTA3LDQ0NiwzMDIyLDQ1NCw0NTUsNDUwLDQwMCw0MDEsNDAyLDQwMyw0MDQsNzA1LDcwMSw3MDQsNzAzLDc3MSw0MDYsMjUwNCw0MDksNDA4LDMwMDQsNzAyLDQ0OCw0NjAsNDIxLDQyMiw0MjMsNDI0LDQzMCw0MjgsNDA0NCw0MDQ1LDc3Myw0MjUsMjUwMyw0MDQ3LDQwNDYsMzAwNSwzMDIxLDQ0OSw0MjcsNDYxLDQ2Miw0NjMsNDY0LDQ4MSw0ODIsNDgzLDQ4NCw0ODUsNTAxLDgwLDgxLDgyLDgzLDg0LDg3LDkwLDg5LDg1LDI1MDAsNjcwLDg4LDMwMDYsNjEsNjIsNjMsNjQsMjAyMSwyMDIyLDIwMjMsMjAyNCwyMDI1LDU1MSw1NTksNjksMjUwMSw3MSw3MCwzMDA3LDU1MCwzMDA4LDU1NSw1NTcsNTU4LDMwMDksMTAxLDEwMiwxMDMsMTA0LDEwNSwyNTAyLDEwNywxMDYsMzAxMCwxNDAsMTQxLDE0MiwxNDMsMTQ0LDI1MDUsMTQ2LDE0NSwzMDExLDIwMSwyMDIsMjAzLDIwNCwyMDQxLDIwNDIsMjA0MywyMDQ0LDIwNDUsMjA2LDIwNSwzMDEyLDMwNTAsNjcxLDY3Miw2NzMsNjc0LDgyMCw4MjEsODIyLDgyMyw4MDAsODAxLDgwMiw4MDMsMjUwOCw5MDAsOTAxLDkwMiw5MDMsMjIxLDIyMiwyMjMsMjI0LDMwMTMsNTQxLDU0Miw1NDMsNTQ0LDMwNjAsMzA2MSwzMDYyLDMwNjMsNDAsNDEsNDIsNDMsNDQsNDUsNDcsNDYsMzAxNCw0MTEwLDQxMTEsNDExMiw0MTEzLDQxMjAsNDEyMSw0MTIyLDQxMjMsNDEzMCw0MTMxLDQxMzIsNDEzMyw0MTQwLDQxNDEsNDE0Miw0MTQzLDQxNTAsNDE1MSw0MTUyLDQxNTMsNjIxLDY4NzEsNjg3MCw2ODcyLDY4NzMsNjg1MSw2ODUwLDY4NTIsNjg1Myw2ODU1LDY4ODAsNjg4MSw2ODgyLDY4ODMsNjg4NSw2ODg2LDY4ODcsNjg4OCw2ODkwLDY4OTEsNjg5MiwzMDE2LDY4NzUsMzAxNSw2ODc2LDM0MCwzNDEsMzQyLDM0MywyODEsNjAwLDYwMSw3ODAsMzgxLDM4Ml0iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2F1dGhlbnRpY2F0aW9ubWV0aG9kIjoiQmVhcmVyIiwic3ViIjoidXNlcjAxIiwianRpIjoiMDFjOWJiMzUtMzk2MC00Mjk2LThlNzAtYjhlZGVmNjM1Y2IxIiwiaWF0IjoxNzQ0NTY2MDIwLCJuYmYiOjE3NDQ1NjYwMjAsImV4cCI6MTc0NDk5ODAyMCwiaXNzIjoiSW5vdmFTcXVhZC5jb20iLCJhdWQiOiJJbm92YVNxdWFkLmNvbSJ9.nIrARQntk0jfNrzeqhphjhMwQzz50aKUyTSBmHTbItY');
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } else {
      console.log('Form is invalid');
    }
  }

  // logout() {
  //   localStorage.removeItem('username');
  //   localStorage.removeItem('password');
  //   this.router.navigate(['/login']);
  // }

}
