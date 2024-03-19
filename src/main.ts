import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import * as AWS from 'aws-sdk';
import { CookieStorage } from 'aws-amplify/utils';
import { Amplify, ResourcesConfig } from 'aws-amplify';
import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';

const config = {
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_YJ8PaGMMG',
      userPoolClientId: '6lh9m33gtdr0gu3gfeanpdrgqo',
    },
  },
  Storage: {
    S3: {
      bucket: 'testawaremindc4028b5e722a4315847098b252d1bf1000648-staging',
      region: 'us-east-1', // Replace with your region
      identityPoolId: 'us-east-1:ddc93f1d-ee5d-4981-b38e-f84fb6cd39b1', // If using Cognito
    },
  },
};
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
cognitoUserPoolsTokenProvider.setKeyValueStorage(new CookieStorage());
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
