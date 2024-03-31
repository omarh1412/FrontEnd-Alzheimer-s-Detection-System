import { Component } from '@angular/core';
import { resetPassword, type ResetPasswordOutput } from 'aws-amplify/auth';
import { Router } from '@angular/router';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import {
  confirmResetPassword,
  type ConfirmResetPasswordInput,
} from 'aws-amplify/auth';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { signUp } from 'aws-amplify/auth';
import { getCurrentUser } from 'aws-amplify/auth';

@Component({
  selector: 'app-forgetpassword',
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
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss',
})
export class ForgetpasswordComponent {
  constructor(private fb: FormBuilder, private router: Router) {}

  IsshowForm: Boolean = false;
  PasswordRestForm = this.fb.group({
    email: ['', Validators.email],
  });
  PasswordVerificationForm = this.fb.group({
    code: [''],
    newPassword: [''],
  });
  message: String = '';
  async handleResetPassword() {
    try {
      const username = this.PasswordRestForm.value.email!;
      const output = await resetPassword({ username });

      this.handleResetPasswordNextSteps(output);
    } catch (error: any) {
      console.log(error);
      this.message = error.toString();
    }
  }

  handleResetPasswordNextSteps(output: ResetPasswordOutput) {
    const { nextStep } = output;

    switch (nextStep.resetPasswordStep) {
      case 'CONFIRM_RESET_PASSWORD_WITH_CODE':
        const codeDeliveryDetails = nextStep.codeDeliveryDetails;
        this.message =
          'Confirmation code was sent Successfully to  email provided.';
        this.IsshowForm = !this.IsshowForm;
        // Collect the confirmation code from the user and pass to confirmResetPassword.

        break;

      case 'DONE':
        console.log('Successfully reset password.');

        break;
    }
  }

  async handleConfirmResetPassword() {
    try {
      const username = this.PasswordRestForm.value.email!;
      const confirmationCode = this.PasswordVerificationForm.value.code!;
      const newPassword = this.PasswordVerificationForm.value.newPassword!;
      await confirmResetPassword({ username, confirmationCode, newPassword });
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }
}
