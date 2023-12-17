import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FinanceDashboardApiService {
  private apiEndpoint = '1.api.fy23ey06.careers.ifelsecloud.com';

  private balanceDataSubject = new Subject<any>();
  private moneyStatisticsDataSubject = new Subject<any>();
  private transactionsDataSubject = new Subject<any>();

  balanceData$ = this.balanceDataSubject.asObservable();
  moneyStatisticsData$ = this.moneyStatisticsDataSubject.asObservable();
  transactionsData$ = this.transactionsDataSubject.asObservable();

  constructor(private http: HttpClient) { }

  fetchData(): void {
    this.http.get<any>(`https://${this.apiEndpoint}`).pipe(
      catchError((error) => {
        console.error('API Error:', error);
        return throwError(() => new Error('API Error'));
      })
    ).subscribe({
      next: (data: { balance: any; money_statistics: any; transactions: any; }) => {
        this.balanceDataSubject.next(data?.balance);
        this.moneyStatisticsDataSubject.next(data?.money_statistics);
        this.transactionsDataSubject.next(data?.transactions);
      },
      error: (err: any) => {
        console.error('API Error:', err);
      },
      complete: () => {
        console.info('API Call Completed');
      },
    });
  }
}