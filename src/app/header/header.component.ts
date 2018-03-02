import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ['post', 'followers', 'queries', 'inbox'];
  }

}
