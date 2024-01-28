import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-trail',
  standalone: true,
  imports: [],
  templateUrl: './review-trail.component.html',
  styleUrl: './review-trail.component.scss',
})
export class ReviewTrailComponent {
  constructor(private router: Router, private location: Location) {}

  goBack() {
    this.location.back();
  }
}
