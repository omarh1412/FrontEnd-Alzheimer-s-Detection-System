import { Routes } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { ThankyouComponent } from '../../components/thankyou/thankyou.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'thankyou',
    component: ThankyouComponent,
  },
];
