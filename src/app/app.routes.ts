import { Routes } from '@angular/router';
import { LoginComponent } from '../../component/login/login.component';
import { ThankyouComponent } from '../../component/thankyou/thankyou.component';
import { SignupComponent } from '../../component/signup/signup.component';
export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  {
    path: 'thankyou',
    component: ThankyouComponent,
  },
];
