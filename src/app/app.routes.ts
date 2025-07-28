<<<<<<< HEAD
import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InvestmentFormComponent } from './components/investment-form/investment-form.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-investment', component: InvestmentFormComponent },
  { path: '**', redirectTo: '' }
];
=======
import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InvestmentFormComponent } from './components/investment-form/investment-form.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-investment', component: InvestmentFormComponent },
  { path: '**', redirectTo: '' }
];
>>>>>>> e2756f4d9db3a23e9e3f1e5f901d81206ff9a7e4
