import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Browser market shares at a specific website, 2014';
   type = 'PieChart';
   data = [
    ['Firefox', 45.0],
    ['IE', 26.8],
    ['Chrome', 12.8],
    ['Safari', 8.5],
    ['Opera', 6.2],
    ['Others', 0.7] 
 ];
 columnNames = ['Browser', 'Percentage'];
 options = {    
    pieHole:0.4
 };
 width = 300;
 height = 200;

}
