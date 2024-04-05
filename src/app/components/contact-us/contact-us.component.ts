import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ FormsModule,
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
    ReactiveFormsModule,],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  constructor(private fb: FormBuilder, private router: Router) {}
  
  contactUsForm = this.fb.group({
    email: "" ,
  });

  errorMessage: String = '';
  async sendEmail() {
    console.log(this.contactUsForm.value);
    
  }

}
