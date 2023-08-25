import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './charts/radar-chart/radar-chart.component';
import { PolarAreaChartComponent } from './charts/polar-area-chart/polar-area-chart.component';
import { BubbleChartComponent } from './charts/bubble-chart/bubble-chart.component';
import { ScatterChartComponent } from './charts/scatter-chart/scatter-chart.component';

@NgModule({
  declarations: [AppComponent, LineChartComponent, PieChartComponent, BarChartComponent, DoughnutChartComponent, RadarChartComponent, PolarAreaChartComponent, BubbleChartComponent, ScatterChartComponent],
  imports: [BrowserModule, AppRoutingModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
