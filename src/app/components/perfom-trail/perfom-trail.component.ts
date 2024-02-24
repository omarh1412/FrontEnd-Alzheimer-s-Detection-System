import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfom-trail',
  standalone: true,
  imports: [],
  templateUrl: './perfom-trail.component.html',
  styleUrl: './perfom-trail.component.scss',
})
export class PerfomTrailComponent {
  constructor(private router: Router, private location: Location) {}

  goBack() {
    this.location.back();
  }
  perfomTrials() {
    this.router.navigate(['/video']);
  }
}
