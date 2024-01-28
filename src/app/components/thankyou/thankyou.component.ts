import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-thankyou',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './thankyou.component.html',
  styleUrl: './thankyou.component.scss',
})
export class ThankyouComponent {
  constructor(private router: Router) {}

  goToMainPage() {
    this.router.navigate(['/main']);
  }
}
