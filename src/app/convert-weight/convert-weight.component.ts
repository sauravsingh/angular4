import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert-weight',
  templateUrl: './convert-weight.component.html',
  styleUrls: ['./convert-weight.component.css']
})

  

export class ConvertWeightComponent implements OnInit {
  grams="0.0";
  pounds="0.0";
  ounces="0.0";
  stones="0.0";
  weightConverter(eventVal){
    //console.log(event);
    this.grams = (eventVal * 1000).toFixed(2);
    this.pounds = (eventVal * 2.2046).toFixed(2);
    this.ounces = (eventVal * 35.274).toFixed(2);
    this.stones = (eventVal * 0.1574).toFixed(2);
  }
  constructor() { }

  ngOnInit() {
  }

}
