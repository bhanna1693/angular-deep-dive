import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AlphavantageResponse} from '../models/alphavantage.model';

@Injectable({
  providedIn: 'root'
})
export class AlphavantageService {
  apiURL = 'https://www.alphavantage.co/query?';
  ak = '1Z64TEQ1S6T1026T';

  constructor(private http: HttpClient) {
  }

  /**
   * @param outputSize='compact' returns only the latest 100 data points in the intraday time series
   * @param outputSize='full' returns the full-length intraday time series
   * @param stockSymbol the stock indices you want to research
   * @param timeInterval interval of stock info
   */
  getTimeSeriesIntraDay(stockSymbol: string,
                        timeInterval: '1min' | '5min' | '15min' | '30min' | '60min' = '5min',
                        outputSize: 'compact' | 'full' = 'compact') {
    return this.http.get<AlphavantageResponse>(this.apiURL, {
      params: {
        function: 'TIME_SERIES_INTRADAY',
        symbol: stockSymbol,
        interval: '5min',
        outputsize: outputSize,
        apikey: this.ak
      }
    });
  }

  /**
   * @param outputSize='compact' returns only the latest 100 data points in the intraday time series
   * @param outputSize='full' returns the full-length time series of 20+ years of historical data
   * @param stockSymbol the stock indices you want to research
   */
  getTimeSeriesDaily(stockSymbol: string, outputSize: 'compact' | 'full' = 'compact') {
    return this.http.get<AlphavantageResponse>(this.apiURL, {
      params: {
        function: 'TIME_SERIES_DAILY',
        symbol: stockSymbol,
        outputsize: outputSize,
        apikey: this.ak
      }
    });
  }

}
