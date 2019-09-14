import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestRoutingModule } from './invest-routing.module';
import { InvestLandingPageComponent } from './invest-landing-page/invest-landing-page.component';


@NgModule({
  declarations: [InvestLandingPageComponent],
  imports: [
    CommonModule,
    InvestRoutingModule
  ]
})
export class InvestModule { }
