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
  selector: 'app-review-page',
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
  templateUrl: './review-page.component.html',
  styleUrl: './review-page.component.scss'
})
export class ReviewPageComponent {
  constructor(private fb: FormBuilder, private router: Router) {}
  rating: number = 0;
  opinion: string = '';

  opinionForm = this.fb.group({
    opinion: "" ,
  });

  errorMessage: String = '';
  async submitFeedback() {
    console.log(this.opinionForm.value);
    console.log(this.rating);
  }
}
