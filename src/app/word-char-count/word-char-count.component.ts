import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-char-count',
  templateUrl: './word-char-count.component.html',
  styleUrls: ['./word-char-count.component.css']
})
export class WordCharCountComponent implements OnInit {
  
  countChar = 0;
  countWords = 0;
  lengthWCCount(eventVal){
    this.countWords = eventVal.split(" ").length;
    this.countChar = eventVal.length;
  }
  constructor() { }

  ngOnInit() {
  }

}
