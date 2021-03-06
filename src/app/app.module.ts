import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavComponent} from './nav/nav.component';
import {MaterialModule} from './material/material.module';
import {FooterComponent} from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SignUpComponent} from './sign-up/sign-up.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {BudgetCalculatorComponent} from './budget-calculator/budget-calculator.component';
import {TextMaskModule} from 'angular2-text-mask';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SignUpComponent,
    HomeComponent,
    PageNotFoundComponent,
    BudgetCalculatorComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TextMaskModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
