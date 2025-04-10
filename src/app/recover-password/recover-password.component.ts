import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatCardModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent {
  recoverPasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.recoverPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.recoverPasswordForm.valid) {
      const email = this.recoverPasswordForm.value.email;

      
      console.log(`Recovery email sent to: ${email}`);
      alert('A recovery email has been sent to your email address.');
      this.router.navigate(['/login']);
    } else {
      console.log('Form is invalid');
    }
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}