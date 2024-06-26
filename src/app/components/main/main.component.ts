import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Location } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  constructor(
    private router: Router,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  userEmail: string = '';

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      let value = params['username']; // value is 'value'
      this.userEmail = value;
    });
  }
  goToReviewTrial() {
    this.router.navigate(['/review-trial']);
  }
  goToResultPage() {
    this.router.navigate(['/result-page']);
  }
  goToPerfomTrial() {
    this.router.navigate(['/perfom-trial']);
  }
  goToInstructions() {
    this.router.navigate(['/instructions']);
  }
  goToReviewModels() {
    this.router.navigate(['/review-models']);
  }
  goToClinicianPage() {
    this.router.navigate(['/clinician-page']);
  }
  goToReviewPage() {
    this.router.navigate(['/review-page']);
  }
  goToContactUsPage() {
    this.router.navigate(['/contact-us']);
  }
}
