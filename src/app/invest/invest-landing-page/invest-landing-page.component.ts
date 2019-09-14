import {Component, OnInit} from '@angular/core';
import {AlphavantageService} from '../services/alphavantage.service';
import {NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-invest-landing-page',
  templateUrl: './invest-landing-page.component.html',
  styleUrls: ['./invest-landing-page.component.css']
})
export class InvestLandingPageComponent implements OnInit {
  stock: any;

  constructor(private alphaService: AlphavantageService) {
  }

  ngOnInit() {
    this.getTimeSeriesIntraDay('compact');
  }


  /**
   * @param outputSize='compact' returns only the latest 100 data points in the intraday time series
   * @param outputSize='full' returns the full-length intraday time series
   */
  getTimeSeriesIntraDay(outputSize: 'compact' | 'full') {
    this.alphaService.getTimeSeriesIntraDay(outputSize).subscribe(resp => {
      this.stock = resp;
    });
  }

}
