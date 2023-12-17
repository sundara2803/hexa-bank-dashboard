import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FinanceDashboardApiService } from '../../services/finance-dashboard-api.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'total-balance-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './total-balance-card.component.html',
  styleUrl: './total-balance-card.component.scss'
})
export class TotalBalanceCardComponent {
  faEllipsis = faEllipsis;
  balanceData: any;
  constructor(private apiService: FinanceDashboardApiService) { }

  ngOnInit(): void {
    this.fetchTotalBalanceData()
  }
  fetchTotalBalanceData() {
    this.apiService.balanceData$.subscribe((data: any) => {
      this.balanceData = data;
    });
  }
}