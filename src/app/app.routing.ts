import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FundsComponent } from './funds/funds.component';
import { HelpComponent } from './help/help.component';
import { FundDetailComponent } from './fund-detail/fund-detail.component';
import { AddComponent } from './add/add.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'funds',
    component: FundsComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'funds/:id',
    component: FundDetailComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
