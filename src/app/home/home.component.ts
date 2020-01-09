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
    ["America","Global",90,50],
    ["Australia","Global",90,10],
    ["Indonesia","Global",90,-50],
    ["Pakistan","Global",50,50],
    ["Nigeria","Global",90,-4],
    ["Europe","Global",30,4],
    ["Asia","Global",10,-4],
    ["Bangladesh","Global",10,-4],

    ["Nepal","Global",40,8],
    ["Bhutan","Global",20,0],
    ["Afghanistan","Global",20,-4],

 ];
 columnNames = ["Location", "Parent","Market trade volume (size)","Market increase/decrease (color)"];
   options = { 
    // minColor: '#DEF6E9',
    // midColor: '#F286DF',
    // maxColor: '#1FCB71',
      // headerHeight:15,
      // showScale: true,
      // height: 700,
      // width: 750,
      fontColor: 'black',
      // useWeightedAverageForAggregation: true,
      
      highlightOnMouseOver: true,
      maxDepth: 1,
      maxPostDepth: 2,
      minHighlightColor: '#8c6bb1',
      midHighlightColor: '#9ebcda',
      maxHighlightColor: '#edf8fb',
      minColor: '#009688',
      midColor: '#f7f7f7',
      maxColor: '#ee8100',
      headerHeight: 15,
      showScale: true,
      // height: 500,
      useWeightedAverageForAggregation: true,
     
   };
  //  width = 550;
  //  height = 400;
 
}