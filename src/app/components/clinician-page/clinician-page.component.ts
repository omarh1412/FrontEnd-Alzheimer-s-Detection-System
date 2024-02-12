import { Component } from '@angular/core';
import { EmailService } from '../../services/emaillServices';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-clinician-page',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './clinician-page.component.html',
  styleUrl: './clinician-page.component.scss'
})
export class ClinicianPageComponent {
  constructor(private fb: FormBuilder, private router: Router) {}

  clinicianForm = this.fb.group({
    email: [''],
    name: [''],
  });

  submitForm() {
    console.log(this.clinicianForm.value);

  }
  goToMain() {
    this.router.navigate(['/main']);
  }
}
