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

    ["America","Global",80,40],
    ["Australia","Global",80,40],
    ["Indonesia","Global",60,-40],
    ["Pakistan","Global",50,50],

    ["Nigeria","Global",90,-30],
    ["Europe","Global",30,4],
    ["Asia","Global",10,10],
    ["Bangladesh","Global",30,30],

    ["Nepal","Global",40,8],
    ["Bhutan","Global",20,20],
    ["Afghanistan","Global",20,20],

 ];
 columnNames = ["Location", "Parent","Market trade volume (size)","Market increase/decrease (color)"];
   options = { 
  
      fontColor: 'white',
      highlightOnMouseOver: true,
      maxDepth: 1,
      maxPostDepth: 2,

      minHighlightColor: '#DEF6E9',
      midHighlightColor: '#1FCB71',
      maxHighlightColor: '#F286DF',

      minColor: '#F286DF',
      midColor: '#F8C8EF',
      maxColor: '#1FCB71',
      headerHeight: 15,
      showScale: true,
      // height: 500,
      useWeightedAverageForAggregation: true,
      textStyle: { color: "white",
      fontName: "Goudy",
        fontSize: "30px",
        bold: false,
        italic: false 
      }
     
   };
  //  width = 550;
  //  height = 400;
 
}