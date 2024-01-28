import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { SignupComponent } from './components/signup/signup.component';
import { MainComponent } from './components/main/main.component';
import { ReviewTrailComponent } from './components/review-trail/review-trail.component';
import { PerfomTrailComponent } from './components/perfom-trail/perfom-trail.component';
import { InstructionsComponent } from '../../component/instructions/instructions.component';
export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'main', component: MainComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: 'review-trial', component: ReviewTrailComponent },
  { path: 'perfom-trial', component: PerfomTrailComponent },
  {
    path: "instructions",
    component : InstructionsComponent
  }
];
