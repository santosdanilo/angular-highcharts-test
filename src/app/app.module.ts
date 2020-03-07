import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HighchartsChartModule } from 'highcharts-angular';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {ChartComponent} from '../chart/chart.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HighchartsChartModule ],
  declarations: [ AppComponent, HelloComponent, ChartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
