import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestRoutingModule } from './invest-routing.module';
import { InvestLandingPageComponent } from './invest-landing-page/invest-landing-page.component';
import {ChartsModule} from 'ng2-charts';
import {MaterialModule} from '../material/material.module';


@NgModule({
  declarations: [InvestLandingPageComponent],
  imports: [
    CommonModule,
    InvestRoutingModule,
    ChartsModule,
    MaterialModule
  ]
})
export class InvestModule { }
