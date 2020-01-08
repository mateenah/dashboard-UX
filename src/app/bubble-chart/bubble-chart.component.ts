import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})
export class BubbleChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Age vs Weight';
  type = 'BubbleChart';
  data = [
    ["Robert", 8, 12],
    ["Mohan", 4, 5.5],
    ["Ramesh", 11, 14],
    ["Julie", 3, 3.5],
    ["Sohan", 6.5, 7],
  ];
  columnNames = ['Id', 'Age','Weight'];
  options = { };
  width = 300;
  height = 200;

}
