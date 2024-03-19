import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { SignupComponent } from './components/signup/signup.component';
import { MainComponent } from './components/main/main.component';
import { ReviewTrailComponent } from './components/review-trail/review-trail.component';
import { PerfomTrailComponent } from './components/perfom-trail/perfom-trail.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { ReviewModelsComponent } from './components/review-models/review-models.component';
import { ClinicianPageComponent } from './components/clinician-page/clinician-page.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { VideoComponent } from './video/video.component';
import { ResultPageComponent } from './result-page/result-page.component';
export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'video', component: VideoComponent },

  { path: 'result-page', component: ResultPageComponent },
  { path: 'main', component: MainComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: 'review-trial', component: ReviewTrailComponent },
  { path: 'perfom-trial', component: PerfomTrailComponent },
  {
    path: 'instructions',
    component: InstructionsComponent,
  },
  {
    path: 'review-models',
    component: ReviewModelsComponent,
  },
  {
    path: 'clinician-page',
    component: ClinicianPageComponent,
  },
];
