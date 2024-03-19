import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { signOut } from 'aws-amplify/auth';
import { getCurrentUser } from 'aws-amplify/auth';
import { Amplify, ResourcesConfig } from 'aws-amplify';
import { fetchAuthSession } from 'aws-amplify/auth';
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
    // fetchAuthSession()
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    // const authConfig: ResourcesConfig['Auth'] = {
    //   Cognito: {
    //     userPoolId: 'us-east-1_YJ8PaGMMG',
    //     userPoolClientId: '6lh9m33gtdr0gu3gfeanpdrgqo',
    //   },
    // };
    // Amplify.configure({
    //   Auth: authConfig,
    //   Storage: {
    //     S3: {
    //       bucket: 'testawaremindc4028b5e722a4315847098b252d1bf1000648-staging',
    //       region: 'us-east-1', // Replace with your region
    //     },
    //   },
    // });
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
