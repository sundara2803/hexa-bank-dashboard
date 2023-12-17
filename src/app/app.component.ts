import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { LeftNavigationComponent } from './components/left-navigation/left-navigation.component';
import { FirstStaticColumnComponent } from './components/first-static-column/first-static-column.component';
import { StatisticsCardsGraphComponent } from './components/statistics-cards-graph/statistics-cards-graph.component';
import { TotalBalanceCardComponent } from './components/total-balance-card/total-balance-card.component';
import { TransactionHistoryGridComponent } from './components/transaction-history-grid/transaction-history-grid.component';
import { FinanceDashboardApiService } from './services/finance-dashboard-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TopNavigationComponent,
    LeftNavigationComponent,
    FirstStaticColumnComponent,
    StatisticsCardsGraphComponent,
    TotalBalanceCardComponent,
    TransactionHistoryGridComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  data: any;
  balanceData: any;
  moneyStatisticsData: any;
  transactionsData: any;

  constructor(private apiService: FinanceDashboardApiService) { }

  ngOnInit(): void {
    this.apiService.fetchData();
  }
}
