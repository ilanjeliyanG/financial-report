import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InvestmentFormComponent } from './components/investment-form/investment-form.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-investment', component: InvestmentFormComponent },
  { path: '**', redirectTo: '' }
];
