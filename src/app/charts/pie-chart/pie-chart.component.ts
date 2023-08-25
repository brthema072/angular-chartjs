import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  // Pie
  pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  pieChartLabels = [
    ['Download', 'Sales'],
    ['In', 'Store', 'Sales'],
    'Mail Sales',
  ];
  pieChartDatasets = [
    {
      data: [300, 500, 100],
    },
  ];
  pieChartLegend = true;
  pieChartPlugins = [];
}
