import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  type='TreeMap';
  data = [
    ["Global",null,0,0],
    ["America","Global",0,0],
    ["Europe","Global",0,0],
    ["Asia","Global",0,0],
    ["Australia","Global",0,0],
    ["Africa","Global",0,0],

    ["USA","America",52,31],
    ["Mexico","America",24,12],
    ["Canada","America",16,-23],

    ["France","Europe",42,-11],
    ["Germany","Europe",31,-2],
    ["Sweden","Europe",22,-13],

    ["China","Asia",36,4],
    ["Japan","Asia",20,-12],
    ["India","Asia",40,63],

    ["Egypt","Africa",21,0],
    ["Congo","Africa",10,12],
    ["Zaire","Africa",8,10],
        
 ];
 columnNames = ["Location", "Parent","Market trade volume (size)","Market increase/decrease (color)"];
   options = { 
    minColor: '#009688',
    midColor: '#f7f7f7',
    maxColor: '#ee8100',
      headerHeight:15,
      showScale: true,
      height: 500,
      width: 1000,
      fontColor: 'black',
      useWeightedAverageForAggregation: true
   };
  //  width = 550;
  //  height = 400;
 
}
