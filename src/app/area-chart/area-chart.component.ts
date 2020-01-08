import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Area Chart';
  type='AreaChart';
  data = [
     ["2013", 1000, 400],
     ["2014", 1170, 460],
     ["2015", 660, 1120],
     ["2016", 1030, 540]
  ];
  columnNames = ['Year', 'Sales',"Expenses"];
  options = { };
  width = 300;
  height = 200;


}
