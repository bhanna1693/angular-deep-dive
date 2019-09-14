import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InvestRoutingModule} from './invest-routing.module';
import {InvestLandingPageComponent} from './invest-landing-page/invest-landing-page.component';
import {MaterialModule} from '../material/material.module';
import {IgxFinancialChartModule} from 'igniteui-angular-charts/ES5/igx-financial-chart-module';


@NgModule({
  declarations: [InvestLandingPageComponent],
  imports: [
    CommonModule,
    InvestRoutingModule,
    MaterialModule,
    IgxFinancialChartModule
  ]
})
export class InvestModule {
}
