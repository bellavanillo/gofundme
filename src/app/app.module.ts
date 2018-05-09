import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { FundsComponent } from './funds/funds.component';
import { FundDetailComponent } from './fund-detail/fund-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HelpComponent,
    FundsComponent,
    FundDetailComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
