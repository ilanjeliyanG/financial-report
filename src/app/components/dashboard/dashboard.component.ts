import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChartConfiguration } from 'chart.js';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [NgChartsModule, CommonModule, RouterLink, MatButtonModule, MatIconModule]
})
export class DashboardComponent implements OnInit {
  isBrowser: boolean;

  // Portfolio Performance Chart
  public performanceChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [100, 105, 102, 108, 112, 115],
        label: 'Portfolio',
        fill: true,
        tension: 0.5,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)'
      },
      {
        data: [100, 103, 101, 106, 109, 111],
        label: 'Benchmark',
        fill: true,
        tension: 0.5,
        borderColor: 'rgba(153,102,255,1)',
        backgroundColor: 'rgba(153,102,255,0.2)'
      }
    ]
  };

  public performanceChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Portfolio Performance vs Benchmark'
      }
    },
    scales: {
      y: {
        beginAtZero: false
      }
    }
  };

  // Asset Allocation Chart
  public allocationChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: ['Stocks', 'Bonds', 'Cash', 'Real Estate', 'Commodities'],
    datasets: [{
      data: [40, 25, 15, 15, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)'
      ]
    }]
  };

  public allocationChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Asset Allocation'
      }
    }
  };

  // Portfolio Metrics
  public portfolioMetrics = {
    totalValue: 150000,
    dailyChange: 2500,
    dailyChangePercent: 1.67,
    ytdReturn: 8.5,
    riskScore: 'Moderate'
  };

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
  }
} 