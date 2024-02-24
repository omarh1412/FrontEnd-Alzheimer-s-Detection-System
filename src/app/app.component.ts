import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { signOut } from 'aws-amplify/auth';
import { getCurrentUser } from 'aws-amplify/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'alzheimers-detection';
  constructor(private router: Router, private cd: ChangeDetectorRef) {}

  showHeader = false;
  async ngOnInit() {
    try {
      const { username, userId, signInDetails } = await getCurrentUser();
      console.log(`The username: ${username}`);
      console.log(`The userId: ${userId}`);
      console.log(`The signInDetails: ${signInDetails}`);
      this.showHeader = true;
      this.cd.detectChanges();
    } catch (err) {
      console.log(err);
      this.showHeader = false;
      this.cd.detectChanges();
    }
  }
  async logout() {
    try {
      await signOut();
      this.router.navigate(['/login']);
      this.showHeader = false;
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
}
