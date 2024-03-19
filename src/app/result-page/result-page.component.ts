import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-result-page',
  standalone: true,
  imports: [],
  templateUrl: './result-page.component.html',
  styleUrl: './result-page.component.scss',
})
export class ResultPageComponent {
  constructor(private router: Router, private location: Location) {}

  goBack() {
    this.location.back();
  }
}
