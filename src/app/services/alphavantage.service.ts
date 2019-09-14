import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlphavantageService {
  api = 'https://www.alphavantage.co/query';
  ak = '1Z64TEQ1S6T1026T';

  constructor(private http: HttpClient) {
  }

  getTimeSeriesIntraDay() {
    // this.http.get(this.api)
  }
}
