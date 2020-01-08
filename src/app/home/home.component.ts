import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'dashboard';
  type='TreeMap';
  data = [
    ["Global",null,0,0],
    ["America","Global",0,0],
    ["Europe","Global",0,0],
    ["Asia","Global",0,0],
    ["Australia","Global",0,0],
    ["Africa","Global",0,0],

    ["USA","America",52,-31],
    ["Mexico","America",24,12],
    ["Canada","America",16,-23],

    ["France","Europe",42,-11],
    ["Germany","Europe",31,-2],
    ["Sweden","Europe",22,-13],

    ["China","Asia",36,-4],
    ["Japan","Asia",20,-12],
    ["India","Asia",40,63],

    ["Egypt","Australia",21,0],
    ["Congo","Australia",10,12],
    ["Zaire","Australia",8,10],
        
 ];
 columnNames = ["Location", "Parent","Market trade volume (size)","Market increase/decrease (color)"];
   options = { 
    minColor: '#F286DF',
    midColor: '#f7f7f7',
    maxColor: '#1FCB71',
      headerHeight:15,
      showScale: true,
      height: 700,
      width: 750,
      fontColor: 'black',
      useWeightedAverageForAggregation: true
   };
  //  width = 550;
  //  height = 400;
 
}