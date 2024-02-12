import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router, private location: Location) {}

  goToReviewTrial() {
    this.router.navigate(['/review-trial']);
  }
  goToPerfomTrial() {
    this.router.navigate(['/perfom-trial']);
  }
  goToInstructions(){
    this.router.navigate(["/instructions"])
  }
  goToReviewModels(){
    this.router.navigate(["/review-models"])
  }
  goToClinicianPage(){
    this.router.navigate(["/clinician-page"])
  }

}
