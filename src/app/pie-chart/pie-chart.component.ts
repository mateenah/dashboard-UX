import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

//   title = 'Browser market shares at a specific website, 2014';
//    type = 'PieChart';
//    data = [
//     ['Firefox', 45.0],
//     ['IE', 26.8],
//     ['Chrome', 12.8],
//     ['Safari', 8.5],
//     ['Opera', 6.2],
//     ['Others', 0.7] 
//  ];
//  columnNames = ['Browser', 'Percentage'];
//  options = {    
//     pieHole:0.4
//  };
//  width = 300;
//  height = 200;



 lineChartData: ChartDataSets[] = [
  { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
];

lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

lineChartOptions = {
  responsive: true,
};

lineChartColors: Color[] = [
  {
    borderColor: 'black',
    backgroundColor: 'rgba(255,255,0,0.28)',
  },
];

lineChartLegend = true;
lineChartPlugins = [];
lineChartType = 'line';


}
