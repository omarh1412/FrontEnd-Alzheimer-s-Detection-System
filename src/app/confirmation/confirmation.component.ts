import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  resendSignUpCode,
  ResendSignUpCodeInput,
  confirmSignUp,
  type ConfirmSignUpInput,
} from 'aws-amplify/auth';
import { autoSignIn } from 'aws-amplify/auth';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-confirmation',
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

  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss',
})
export class ConfirmationComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  userEmail: string = '';

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      let value = params['username']; // value is 'value'
      //console.log('hii..', value);
      this.userEmail = value;
    });
  }

  async handleAutoSignIn() {
    try {
      const signInOutput = await autoSignIn();
      console.log(signInOutput);
      console.log(this.userEmail);

      this.router.navigate(['/main'], {
        queryParams: { username: this.userEmail },
      });
      // handle sign-in steps
    } catch (error) {
      console.log(error);
    }
  }

  confirmationForm = this.fb.group({
    confirmationCode: ['', Validators.required],
  });
  async reSendCode() {
    const test: ResendSignUpCodeInput = {
      username: this.userEmail,
    };
    resendSignUpCode(test).then((res) => console.log(res));
  }
  async handleSignUpConfirmation() {
    const confirmationCode = this.confirmationForm.value.confirmationCode!;
    const username = this.userEmail;
    try {
      const { isSignUpComplete, nextStep } = await confirmSignUp({
        username,
        confirmationCode,
      });
      console.log(nextStep);
      switch (nextStep.signUpStep) {
        case 'DONE':
          this.router.navigate(['/main']);
          break;
        case 'COMPLETE_AUTO_SIGN_IN':
          this.handleAutoSignIn();
          break;

        // take to confirmation page.. to confirm the email
      }
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }
}
