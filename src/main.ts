import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Amplify } from 'aws-amplify';

const config = {
  Auth: {
    Cognito: {
      userPoolId: 'us-east-2_jB44Z57Hf',
      userPoolClientId: '1ibm7fppm9dh8q2bpfncuijqbf',
    },
  },
};
Amplify.configure(config);

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
