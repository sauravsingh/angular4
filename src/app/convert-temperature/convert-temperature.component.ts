import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-convert-temperature',
  templateUrl: './convert-temperature.component.html',
  styleUrls: ['./convert-temperature.component.css']
})
export class ConvertTemperatureComponent implements OnInit {
  fahreheight = 0;
  kelvin = 0;
  temperatureConverter(eventVal){
    this.fahreheight = (eventVal*1.8)+32;
    this.kelvin = eventVal+273.15;
  }
  constructor() { }

  ngOnInit() {
  }

}
