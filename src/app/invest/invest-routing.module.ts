import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InvestLandingPageComponent} from './invest-landing-page/invest-landing-page.component';

// localhost:4200/invest/...
const routes: Routes = [
  {
    path: '',
    component: InvestLandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestRoutingModule { }
