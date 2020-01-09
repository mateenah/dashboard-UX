
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lineChartData: ChartDataSets[] = [
   { data: [85, 72, 78, 75, 77] },
 ];
 
 lineChartLabels: Label[] = ['Fri', '06:00', '12:00', '18:00', 'Sat'];
 
 lineChartOptions = {
   responsive: true,
   legend: false,
   scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
        
      }],
      yAxes: [{
         gridLines: {
    display: false,
  },
  ticks: {
   display : false,
 },
      }]
    }
 };
 
 lineChartColors: Color[] = [
   {
     borderColor: '#57D994',
     backgroundColor: 'transparent',
   },
 ];
 
 lineChartLegend = true;
 lineChartPlugins = [];
 lineChartType = 'line';
 
 

}
