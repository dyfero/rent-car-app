import { Routes } from '@angular/router';

const REDIRECT_TO = '/error/403';
export const permissionsData: any = (only?: any[], except?: any[]) => {
  return {
    permissions: {
      only: only ?? {},
      except: except ?? {},
      redirectTo: REDIRECT_TO
    }
  };
};

export const NOT_AUTH_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../module/dashboard/dashboard.module').then((m) => m.DashboardModule),
    data: permissionsData()
  },
  {
    path: 'cars',
    loadChildren: () => import('../../module/car/car.module').then((m) => m.CarModule),
    data: permissionsData()
  },
  {
    path: 'customers',
    loadChildren: () => import('../../module/customer/customer.module').then((m) => m.CustomerModule),
    data: permissionsData()
  },
  {
    path: 'rents',
    loadChildren: () => import('../../module/rent/rent.module').then((m) => m.RentModule),
    data: permissionsData()
  },
];
