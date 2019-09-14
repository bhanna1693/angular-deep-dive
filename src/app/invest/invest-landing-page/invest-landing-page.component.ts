import {Component, OnInit} from '@angular/core';
import {AlphavantageService} from '../services/alphavantage.service';
import {AlphavantageDailyResponse, ChartDisplayModel, StockInfoDetails} from '../models/alphavantage.model';

@Component({
  selector: 'app-invest-landing-page',
  templateUrl: './invest-landing-page.component.html',
  styleUrls: ['./invest-landing-page.component.css']
})
export class InvestLandingPageComponent implements OnInit {
  stockDailyDisplay: ChartDisplayModel[] = [];

  constructor(private alphaService: AlphavantageService) {
  }

  ngOnInit() {
    console.log('simple date', new Date(2019, 9, 13));
    this.getTimeSeriesDaily('GOOG');
  }

  getTimeSeriesDaily(stockSymbol: string) {
    this.alphaService.getTimeSeriesDaily(stockSymbol).subscribe((resp: AlphavantageDailyResponse) => {
      console.log(resp);
      for (const [key, value] of Object.entries(resp['Time Series (Daily)'])) {
        const s: ChartDisplayModel = {
          time: new Date(key).toString(),
          open: value['1. open'],
          high: value['2. high'],
          low: value['3. low'],
          close: value['4. close'],
          volume: value['5. volume']
        };
        this.stockDailyDisplay.push(s);
      }
      console.log(this.stockDailyDisplay);
    });
  }

}
