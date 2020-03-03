import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  
})
export class GraficoDonaComponent implements OnInit {


  @Input('chartLabels') doughnutChartLabels: Label[] = [];
  @Input('chartData') doughnutChartData: MultiDataSet = [];
  @Input('chartType') doughnutChartType: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
