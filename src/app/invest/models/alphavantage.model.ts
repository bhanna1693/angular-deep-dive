export interface AlphavantageDailyResponse {
  MetaData: MetaData;
  'Time Series (Daily)': StockInfo;
}

export interface StockInfo {
  [key: string]: StockInfoDetails;
}

export interface StockInfoDetails {
  '1. open': string;
  '2. high': string;
  '3. low': string;
  '4. close': string;
  '5. volume': string;
}

export interface MetaData {
  Information: string;
  Symbol: string;
  LastRefreshed: string;
  Interval: string;
  OutputSize: string;
  TimeZone: string;
}

export interface ChartDisplayModel {
  time: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

