import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NOT_AUTH_ROUTES } from './config/routes/not-auth.routes';
import { DashboardComponent } from './layout/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    children: NOT_AUTH_ROUTES,
    component: DashboardComponent,
  },
  {
    path: '**',
    redirectTo: 'error/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
