import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FundsComponent } from './funds/funds.component';
import { HelpComponent } from './help/help.component';
import { FundDetailComponent } from './fund-detail/fund-detail.component';

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
