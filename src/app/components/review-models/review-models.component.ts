import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-review-models',
  standalone: true,
  imports: [],
  templateUrl: './review-models.component.html',
  styleUrl: './review-models.component.scss'
})
export class ReviewModelsComponent {
  constructor(private router: Router, private location: Location) {}
  goToMain() {
    this.router.navigate(['/main']);
  }
}
