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
import { signIn } from 'aws-amplify/auth';

@Component({
  selector: 'app-login',
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
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private router: Router) {}

  loginForm = this.fb.group({
    email: ['', Validators.email],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  async submitForm() {
    console.log(this.loginForm.value);
    const username = this.loginForm.value.email!;
    const password = this.loginForm.value.password!;
    try {
      const { isSignedIn, nextStep } = await signIn({ username, password });
      console.log(nextStep);
      switch (nextStep.signInStep) {
        case 'CONFIRM_SIGN_UP':
          console.log('needs to confirm');
          this.router.navigate(['/confirmation'], {
            queryParams: { username: username },
          });
        // take to confirmation page.. to confirm the email
      }
      switch (nextStep.signInStep) {
        case 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED':
          ///  console.log('needs to confirm');
          this.router.navigate(['/confirmation'], {
            queryParams: { username: username },
          });
        // take to confirmation page.. to confirm the email
      }

      if (isSignedIn) {
        this.router.navigate(['/main'], {
          queryParams: { username: username },
        });
      }
    } catch (error) {
      console.log('error signing in', error);
    }
  }
}
