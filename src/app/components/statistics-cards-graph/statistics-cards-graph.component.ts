import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FinanceDashboardApiService } from '../../services/finance-dashboard-api.service';
import * as Highcharts from 'highcharts/highstock';
import { HighchartsChartModule } from 'highcharts-angular';
import { faSquareCaretDown, faEllipsis, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'statistics-cards-graph',
  standalone: true,
  imports: [CommonModule, HighchartsChartModule, FontAwesomeModule],
  templateUrl: './statistics-cards-graph.component.html',
  styleUrl: './statistics-cards-graph.component.scss'
})
export class StatisticsCardsGraphComponent {
  faSquareCaretDown = faSquareCaretDown;
  faEllipsis = faEllipsis;
  faChartLine = faChartLine;
  moneyStatisticsData: any;
  chartOptions: any;
  highCharts: typeof Highcharts = Highcharts;
  chartData = [
    {
      name: 'Income',
      data: [30000, 40000, 35000, 30000, 38000, 40000, 32000, 28000, 33000, 35000, 38000, 40000],
      color: '#91A7A7'
    },
    {
      name: 'Investment',
      data: [15000, 20000, 18000, 25000, 22000, 28000, 30000, 32000, 28000, 35000, 38000, 40000],
      color: '#8384AE'
    },
    {
      name: 'Expense',
      data: [10000, 12000, 11000, 15000, 13000, 16000, 18000, 20000, 22000, 24000, 26000, 28000],
      color: '#545C8D'
    }
  ]
  constructor(private apiService: FinanceDashboardApiService) { }

  ngOnInit(): void {
    this.generateBarChart();
    this.fetchMoneyStatisticsData()
  }
  generateBarChart() {
    this.chartOptions = {
      chart: {
        type: 'column'
      },
      yAxis: {
        title: {
          text: ''
        },
      },
      title: {
        text: ""
      },
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
      },
      series: this.chartData,
    }
  }
  fetchMoneyStatisticsData() {
    this.apiService.moneyStatisticsData$.subscribe((data: any) => {
      this.moneyStatisticsData = data;
      console.log(this.moneyStatisticsData)
    });
  }
}