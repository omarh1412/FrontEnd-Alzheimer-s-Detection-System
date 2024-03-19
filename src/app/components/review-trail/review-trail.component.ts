import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { list } from 'aws-amplify/storage';
import { Amplify, ResourcesConfig } from 'aws-amplify';

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
  async ngOnInit() {
    const authConfig: ResourcesConfig['Auth'] = {
      Cognito: {
        userPoolId: 'us-east-2_3xGks7Pum',
        userPoolClientId: '4k8k15ukraa51d9fo0shu2dgbg',
      },
    };

    Amplify.configure({
      Auth: authConfig,
      Storage: {
        S3: {
          bucket: 'awareminduservide200601-staging',
          region: 'us-east-2', // Replace with your region
        },
      },
    });
    try {
      const result = await list({
        prefix: 'public/',
      });
    } catch (error) {
      console.log(error);
    }
  }
}
