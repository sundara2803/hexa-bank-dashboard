import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FinanceDashboardApiService } from '../../services/finance-dashboard-api.service';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsis, faSort, faUserAstronaut, faFilter, faFileExport, faMagnifyingGlass,faRotateRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'transaction-history-grid',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './transaction-history-grid.component.html',
  styleUrl: './transaction-history-grid.component.scss'
})

export class TransactionHistoryGridComponent {
  transactionsData: any;
  filteredTransactions: any;
  searchText: string = '';
  faEllipsis = faEllipsis;
  faSort = faSort;
  faUserAstronaut=faUserAstronaut;
  faFilter=faFilter;
  faFileExport=faFileExport;
  faMagnifyingGlass=faMagnifyingGlass;
  faRotateRight=faRotateRight;
  popupTransaction: any | null = null;
  constructor(private apiService: FinanceDashboardApiService) { }

  ngOnInit(): void {
    this.fetchTransactionHistory();
  }

  fetchTransactionHistory(){
    this.apiService.transactionsData$.subscribe((data: any) => {
      this.transactionsData = data.slice(0, 5);
      this.filteredTransactions = this.transactionsData;
    });
  }

  search() {
    this.filteredTransactions = this.transactionsData.filter((transaction: any) =>
      Object.values(transaction).some((value: any) =>
        value.toString().toLowerCase().includes(this.searchText.toLowerCase())
      )
    );
  }

  resetFilter() {
    this.filteredTransactions = this.transactionsData;
    this.searchText = '';
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Success':
        return 'green';
      case 'Pending':
        return 'yellow';
      case 'Failed':
        return 'red';
      default:
        return '';
    }
  }

  sortBy(column: string) {
    this.filteredTransactions = [...this.filteredTransactions].sort((a, b) => {
      if (a[column] < b[column]) return -1;
      if (a[column] > b[column]) return 1;
      return 0;
    });
  }

  openPopup(transaction: any) {
    this.popupTransaction = transaction;
  }

  closePopup() {
    this.popupTransaction = null;
  }
}