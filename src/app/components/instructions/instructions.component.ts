import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-instructions',
  standalone: true,
  imports: [],
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.scss'
})
export class InstructionsComponent {
  constructor(private router: Router, private location: Location) {}
  goToMain() {
    this.router.navigate(['/main']);
  }
  continue(){
    this.router.navigate(["/instructions"])
  }
}
