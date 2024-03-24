import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
import { MatCardModule } from '@angular/material/card';
import { signUp } from 'aws-amplify/auth';
import { getCurrentUser } from 'aws-amplify/auth';

@Component({
  selector: 'app-signup',
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
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  constructor(private fb: FormBuilder, private router: Router) {}

  errorMessage: String = '';
  signUpForm = this.fb.group({
    email: ['', Validators.email],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('.*[0-9].*'),
      ],
    ],
  });

  passwordErros = {
    lowercase: false,
    uppercase: false,
    passwordshort: true,
    specialCharacter: false,
    numericCharacter: false,
  };

  validateEmail(email: any) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const isEmailValid = re.test(email);
    return isEmailValid;
  }
  validatePassword(password: string) {
    const reLowerCase = /[a-z]/;
    const hasLowerCase = reLowerCase.test(password);
    if (hasLowerCase) {
      this.passwordErros.lowercase = false;
    } else {
      this.passwordErros.lowercase = true;
    }

    const reUpperCase = /[A-Z]/;

    const hasUpeprCase = reUpperCase.test(password);
    if (hasUpeprCase) {
      this.passwordErros.uppercase = false;
    } else {
      this.passwordErros.uppercase = true;
    }

    const reSpecialCharacter = /[!@#$%^&*()\-+]/;
    const hasSpecialCharacter = reSpecialCharacter.test(password);

    if (hasSpecialCharacter) {
      this.passwordErros.specialCharacter = false;
    } else {
      this.passwordErros.specialCharacter = true;
    }

    const reNumericCharacter = /.*[0-9].*/;
    const hasNumericCharacter = reNumericCharacter.test(password);

    if (hasNumericCharacter) {
      this.passwordErros.numericCharacter = false;
    } else {
      this.passwordErros.numericCharacter = true;
    }
  }

  async submitForm() {
    const username = this.signUpForm.value.email!;
    const email = this.signUpForm.value.email!;
    const password = this.signUpForm.value.password!;

    this.validateEmail(email);
    this.validatePassword(password);
    try {
      const { isSignUpComplete, userId, nextStep } = await signUp({
        username,
        password,
        options: {
          userAttributes: {
            email,
          },
          autoSignIn: true,
        },
      });

      if (userId) {
        // this.router.navigate(['/confirmation']);
        this.router.navigate(['/confirmation'], {
          queryParams: { username: email },
        });
      }
    } catch (error: any) {
      console.log(error);
      console.log('error signing up:', error.toString());

      if (error.toString().includes('UsernameExistsException')) {
        // alert('user not found');
        this.errorMessage =
          'An account with the given email already exists. Try using different Email.';
      }
    }
    // this.router.navigate(['/thankyou']);
  }
}
