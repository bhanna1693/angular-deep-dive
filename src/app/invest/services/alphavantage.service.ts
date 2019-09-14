import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlphavantageService {
  apiURL = 'https://www.alphavantage.co/query?';
  ak = '1Z64TEQ1S6T1026T';

  constructor(private http: HttpClient) {
  }

  getTimeSeriesIntraDay(outputSize: 'compact' | 'full') {
    return this.http.get(this.apiURL, {
      params: {
        function: 'TIME_SERIES_INTRADAY',
        symbol: 'MSFT',
        interval: '5min',
        outputsize: outputSize,
        apikey: this.ak
      }
    });
  }

}
