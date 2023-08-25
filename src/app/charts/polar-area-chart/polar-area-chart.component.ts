import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: ['./polar-area-chart.component.scss'],
})
export class PolarAreaChartComponent {
  polarAreaChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail Sales',
    'Telesales',
    'Corporate Sales',
  ];
  polarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] =
    [{ data: [300, 500, 100, 40, 120] }];
  polarAreaLegend = true;

  polarAreaOptions: ChartConfiguration<'polarArea'>['options'] = {
    responsive: false,
  };
}
