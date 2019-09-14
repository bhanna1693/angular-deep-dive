export interface AlphavantageResponse {
  MetaData: MetaData;
  TimeSeries: StockInfo[];
}

export interface MetaData {
  Information: string;
  Symbol: string;
  LastRefreshed: string;
  Interval: string;
  OutputSize: string;
  TimeZone: string;
}

export interface StockInfo {
  dateTime: {
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
  };
}


