import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})
export class BubbleChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    legend: false,
    scales: {
      xAxes: [{
        ticks: {
          display : true,
          // beginAtZero: true,
          min: 5,
          max: 50,
        },
        gridLines: {
          display: false,
        },
      }],
      yAxes: [{
        ticks: {
          display : false,
          beginAtZero: true,
          min: 0,
          max: 25,
        },
         gridLines: {
    display: false,
  },
      }]
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;

  public bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 10, y: 15, r: 10 },
        { x: 15, y: 15, r: 10 },
        { x: 19, y: 15, r: 20 },
        
        { x: 25, y: 15, r: 5 },
        { x: 28, y: 15, r: 10 },
        { x: 30, y: 15, r: 5 },

        { x: 37, y: 15, r: 15 },
        { x: 40, y: 15, r: 20 },

        { x: 45, y: 15, r: 5 },
      ],
      backgroundColor: [
        "#FFEEB4", //1
        "#F8C0ED", //3
        "#FFEEB4", 

        "#FFEEB4",
        "#FFEEB4", //4
        "#FFEEB4",

        "#FFEEB4",
        "#F8C0ED",

        "#FFEEB4",
      ],
      label: 'Investment Equities',
    },
  ];

}
