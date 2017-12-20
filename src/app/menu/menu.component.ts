import { COUPONS_URL, NEWS_URL, COUPONS_TAG, NEWS_TAG } from '../constant';
import { Component, OnInit } from '@angular/core';
import { MENUS } from '../menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menues = MENUS;
  COUPONSURL = COUPONS_URL;
  NEWSURL = NEWS_URL;
  COUPONSTAG = COUPONS_TAG;
  NEWSTAG = NEWS_TAG;
  constructor() { }

  ngOnInit() {
  }

}
