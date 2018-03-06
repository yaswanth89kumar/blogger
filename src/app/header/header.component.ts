import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menuItems: any[];
  public username: string;

  constructor(private af: AngularFireAuth) {
    this.af.authState.subscribe(res=>{
      this.username = (res != null)? res.displayName : null;
    });
  }

  ngOnInit() {
    this.menuItems = ['post', 'followers', 'queries', 'inbox'];
  }

}
