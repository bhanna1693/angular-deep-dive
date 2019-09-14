import {Component, OnInit, ViewChild} from '@angular/core';
import {AlphavantageService} from '../services/alphavantage.service';
import {NavigationExtras} from '@angular/router';
import {BaseChartDirective} from 'ng2-charts';
import {AlphavantageResponse} from '../models/alphavantage.model';

@Component({
  selector: 'app-invest-landing-page',
  templateUrl: './invest-landing-page.component.html',
  styleUrls: ['./invest-landing-page.component.css']
})
export class InvestLandingPageComponent implements OnInit {
  stockIntraday: AlphavantageResponse;
  stockDaily: AlphavantageResponse;

  constructor(private alphaService: AlphavantageService) {
  }

  ngOnInit() {
    this.getTimeSeriesIntraDay('MSFT');

    this.getTimeSeriesDaily('AAPL');
  }

  getTimeSeriesIntraDay(stockSymbol: string) {
    this.alphaService.getTimeSeriesIntraDay(stockSymbol).subscribe(resp => {
      this.stockIntraday = resp;
    });
  }

  getTimeSeriesDaily(stockSymbol: string) {
    this.alphaService.getTimeSeriesDaily(stockSymbol).subscribe(resp => {
      this.stockDaily = resp;
    });
  }

}
