import { Component, OnInit, Input, ChangeDetectionStrategy, ViewEncapsulation, Inject, LOCALE_ID, ViewChild, Output, EventEmitter, ContentChild, AfterContentInit, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts'
import { Options, Chart } from 'highcharts'
import { ChartHelper } from './chart.helper';
import { HighchartsChartComponent } from 'highcharts-angular';

@Component({
  selector: 'ga-chart',
  template: `
    <header class="chart-title">{{title}}</header>
    <div class="chart-box">
      <highcharts-chart *ngIf="!!options"
            [Highcharts]="Highcharts"
            [options]="options"
            [oneToOne]="true"
            (chartInstance)="getInstance($event)"
            class="box">
      </highcharts-chart>
    </div>
  `,
  styleUrls: ['./chart.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ChartComponent implements OnInit, AfterViewInit {
  @ViewChild(HighchartsChartComponent, { static: false }) highchartsWrapper: HighchartsChartComponent;

  _options: Options = null;
  @Input()
  get options() {
    return this._options
  }
  set options(value: Options) {
    if (!value) {
      value = ChartHelper.minimalObject
    }
    this._options = value
  };
  @Input() title: string;

  Highcharts: typeof Highcharts = Highcharts;
  chartInstance: Chart = null

  constructor(@Inject(LOCALE_ID) private _locale: string) { }

  ngAfterViewInit() {
    /*
    const oldUpdateOrCreateChart = this.highchartsWrapper.updateOrCreateChart.bind(this.highchartsWrapper)
    const handler = function () {
      oldUpdateOrCreateChart()
      if (this.chart && this.chart.update) {
        this.chartInstance.emit(this.chart)
      }
    }
    this.highchartsWrapper.updateOrCreateChart = handler.bind(this.highchartsWrapper)
    */
  }

  getInstance(event: Chart) {
    this.chartInstance = event as Chart
  }
}
