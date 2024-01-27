import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  constructor(private router: Router) {}

  goToReviewTrial() {
    this.router.navigate(['/review-trial']);
  }
  goToPerfomTrial() {
    this.router.navigate(['/perfom-trial']);
  }
}
